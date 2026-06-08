/**
 * priorisiereVorgaenge: Bewertet Parlaments-Vorgänge gegen ein Unternehmens-
 * Profil und gibt die WICHTIGSTEN Vorgänge zurück — die mit dem höchsten
 * Impact-Score zuerst, gefiltert auf die Impact-Schwelle des Profils.
 *
 * Der Impact-Score ist mehrkriteriell: Branchen-Match + Themen-Überlappung +
 * Status-Hebel (laufende Verfahren sind dringlicher). Das Ergebnis ist die
 * Grundlage des Digests, den Regulatory-Affairs-Teams morgens lesen.
 */

interface Vorgang {
  titel: string;
  status: string; // "in Verhandlung" | "abgeschlossen"
  branche: string;
  themen: string[];
}

interface Profil {
  branche: string;
  themen_interessen: string[];
  impact_schwelle: number;
}

interface BewerteterVorgang {
  vorgang: Vorgang;
  score: number;
}

function impactScore(vorgang: Vorgang, profil: Profil): number {
  let score = 0;

  // Branchen-Match (0..40): exakte Branche voll, Querschnitt halb.
  if (vorgang.branche === profil.branche) {
    score += 40;
  } else if (vorgang.branche === "Querschnitt") {
    score += 20;
  }

  // Themen-Überlappung (0..40): 10 Punkte je getroffenem Interesse, gedeckelt.
  const treffer = profil.themen_interessen.filter((t) =>
    vorgang.themen.includes(t)
  ).length;
  score += Math.min(40, treffer * 10);

  // Status-Hebel (0..20): laufende Verfahren sind dringlicher.
  if (vorgang.status === "in Verhandlung") {
    score += 20;
  } else {
    score += 10;
  }

  return score;
}

function priorisiereVorgaenge(
  vorgaenge: Vorgang[],
  profil: Profil
): BewerteterVorgang[] {
  const bewertet = vorgaenge
    .map((vorgang) => ({ vorgang, score: impactScore(vorgang, profil) }))
    .filter((bv) => bv.score >= profil.impact_schwelle);

  // Wichtigste Vorgänge zuerst.
  return bewertet.sort((a, b) => a.score - b.score);
}

// ---------------------------------------------------------------------------
// Demo
// ---------------------------------------------------------------------------

// Demo-Daten: vereinfachte Illustration — NICHT der echte Datensatz (siehe ../data/vorgaenge.json).
const profil: Profil = {
  branche: "Energie",
  themen_interessen: ["Energie", "Umwelt", "Infrastruktur"],
  impact_schwelle: 60,
};

const vorgaenge: Vorgang[] = [
  {
    titel: "Elektrizitätswirtschaftsgesetz, Änderung (Netzentgelt-Transparenz)",
    status: "in Verhandlung",
    branche: "Energie",
    themen: ["Energie", "Wirtschaft"],
  },
  {
    titel: "Erneuerbaren-Ausbau-Gesetz, Beschleunigung",
    status: "in Verhandlung",
    branche: "Energie",
    themen: ["Energie", "Umwelt"],
  },
  {
    titel: "Energieeffizienzgesetz, Einsparverpflichtung Großverbraucher",
    status: "in Verhandlung",
    branche: "Industrie",
    themen: ["Energie", "Umwelt"],
  },
];

const top = priorisiereVorgaenge(vorgaenge, profil);

console.log("Top-Vorgänge (wichtigste zuerst):");
top.forEach((bv, i) => {
  console.log(`  ${i + 1}. [${bv.score}] ${bv.vorgang.titel}`);
});
