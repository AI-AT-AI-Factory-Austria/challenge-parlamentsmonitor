# AI Developer Challenge: „Parlamentsmonitor"

Version 1.0 · 2026-06 · Kontakt: AI:AT Hiring Team

Schön, dass du dabei bist. Das hier ist kein Trick-Test, sondern ein echtes Stück von dem, was wir im Venture Studio und n8n CoE täglich tun: mit KI schnell etwas Lauffähiges bauen, das Mehrwert schafft.

Es gibt keine Musterlösung, die du treffen musst. Wir schauen, wie du ein unscharf spezifiziertes Problem zerlegst, Entscheidungen triffst und KI sinnvoll einsetzt.

## Die Mission

Regulatory-Affairs- und Legal-Teams in regulierten Branchen (Energie, Finanz, Pharma, Telekom) verlieren täglich Zeit damit, RIS-Listen und parlamentarische Websites manuell zu durchforsten, auf der Suche nach Gesetzesentwürfen und Anträgen, die das eigene Unternehmen betreffen. Wer zu spät reagiert, verpasst Stellungnahmefristen oder wird von neuen Compliance-Pflichten überrascht.

Bau einen „Parlamentsmonitor": einen kleinen KI-Agent, der eine Liste parlamentarischer Vorgänge und ein Unternehmensprofil nimmt, je Vorgang die Wirkung fürs Unternehmen zusammenfasst (LLM-Summarize), einen Impact-Score vergibt und das Ergebnis als priorisierten Digest ausgibt: das Frühwarn-Briefing, das morgens auf dem Schreibtisch liegt.

Wir liefern dir ein Seed-Dataset mit 21 synthetischen Parlaments-Vorgängen (`../data/vorgaenge.json`, Felder dokumentiert) plus ein Beispiel-Unternehmensprofil (`../data/examples/profil_energie.json`). Kein Domänenwissen nötig: alles, was du brauchst, steckt im Dataset und in dieser Aufgabe.

> 📂 **Im Repo:** [`../data/`](../data/): `vorgaenge.json` + Beispiel-Profil (Feld-Doku: [`../data/README.md`](../data/README.md)).
> Muster „Event-Poll → LLM-Summarize → Impact-Score → Digest": Vorgänge laden, filtern und bewerten, zusammenfassen, priorisierten Report ausgeben.

### Teil A: Bau den Agent (Pflicht)

- **Input:** ein Unternehmensprofil (`branche`, `themen_interessen`, `impact_schwelle`) plus eine Liste von Vorgängen (aus dem Seed; optionaler Live-Pfad zur echten Parlaments-API, siehe unten).
- **Output:** ein priorisierter Digest mit den Top-Vorgängen über der `impact_schwelle`, sortiert nach Impact-Score, je mit Titel, Typ, Status, Datum, einer kurzen Zusammenfassung der Wirkung fürs Unternehmen (ein Satz) und einer Empfehlung (z. B. „Hoch priorisieren: laufendes Verfahren, Kernbranche" oder „Beobachten: mittelfristig relevant").
- **Pflicht-Seam:** Der LLM-Summarize-Schritt (der eine Kurzzusammenfassung je Vorgang erzeugt) muss austauschbar sein. Ein deterministischer Offline-Stub läuft ohne Key/Netz, ein echter LLM-Provider ist ein optionaler Pfad (env/Flag). Der Default-Lauf braucht keinen API-Key.
- **Form:** lauffähiges Git-Repo mit echtem Code plus ein README, das uns das Ding in < 5 Minuten zum Laufen bringt (offline, kein Build-Step, Node ≥ 20). Stack ist dir überlassen (TypeScript-CLI ist das Naheliegende).

> Die interessanten Design-Entscheidungen: Wie berechnest du den Impact-Score? Vorgang-Typ (Regierungsvorlage vs. Antrag), Status (in Verhandlung vs. abgeschlossen), Branchen-Match und Themen-Überlappung sind alle relevante Faktoren; wie du sie gewichtest, ist dir überlassen. Ebenso: Wie trennst du den LLM-Seam sauber (Stub und echter Provider), ohne den Rest der Pipeline zu verkomplizieren? Und: Was kommt in den Digest, was fällt weg? Wir achten auf die Begründung, nicht auf eine vorgegebene Formel. Genau hier sehen wir dein Urteil.

> Ein echter LLM-Call ist erlaubt, aber nicht Pflicht. Ein deterministischer Stub (z. B. aus dem `kurztext`-Feld des Seeds abgeleitet, oder ein einfaches Template) ist für die Pflicht-Einreichung völlig okay, falls du keinen API-Key hast. Optionaler Stretch: echte Anbindung des LLM deiner Wahl plus Live-Pfad zur Parlaments-OGD-API (auch ohne Key).

### Teil B: Code-Review (~15 min)

Wir geben dir ein kurzes, KI-generiertes Code-Snippet (TypeScript; keine TS-Erfahrung nötig, der Bug ist sprachunabhängig verständlich). Tipp: vergleiche, was der Doc-Kommentar *verspricht*, mit dem, was der Code *tut*, und führe den Code im Kopf an einem kleinen Beispiel durch. Es gibt einen zentralen funktionalen Bug. Finde ihn, fixe ihn, und begründe in 3–5 Sätzen, warum es einer ist. Sag uns auch, was dir sonst auffällt (Edge-Cases, fragwürdige Annahmen, Typ-Modellierung, fehlende Tests); diese weiterführende Kritik zählt für uns genauso wie der Fix selbst. Wir wollen sehen, ob du KI-Output beurteilen kannst, nicht nur erzeugen.

> Das Snippet liegt als Datei unter [`code-review/snippet.ts`](./code-review/snippet.ts) und ist unten in Anhang A abgedruckt.

## Spielregeln

- **Aufwand: ~4–6 fokussierte Stunden.** Du hast eine Woche, die ist für Flexibilität, nicht zum Durchgrinden. Bitte nicht überinvestieren: wir bewerten Denken und Urteil, nicht Politur. *(Die 4–6 h schließen Walkthrough + Decision-Log ein. Loom: 1 Take, 3–5 min; Decision-Log: 5–10 Zeilen Stichworte.)*
- **Nutze jede KI, jede Library, google frei.** Wird erwartet, nicht nur erlaubt. Cursor, Claude, Copilot, Coding-Agents: leg los.
- **Der Kern (A + B) ist die Latte.** Dazu gehören auch ein paar sinnvolle Tests (kein Coverage-Theater; zählen mit 10 %). Stretch-Goals (echtes LLM, Live-API-Anbindung, Branchen-Multiprofile, E-Mail-Digest, UI, Eval-Set) sind zum Glänzen und komplett optional.

> **Wichtig:** Ein rauer Kern mit klarem Denken schlägt eine polierte, aber oberflächliche Umsetzung. Wir meinen das ernst, bitte nicht überinvestieren. Mehr Stunden bedeuten bei uns nicht mehr Punkte; wir bewerten das Kern-Ergebnis, nicht den Zeitaufwand.

AI Factory Austria steht für Chancengleichheit. Brauchst du Unterstützung oder Anpassungen im Prozess, sag uns Bescheid, wir helfen. Ob Uni, Bootcamp oder self-taught: es zählt, wie du denkst und mit KI arbeitest.

## Was du abgibst

1. **Repo-Link** (GitHub/GitLab) mit Code + README.
2. **Code-Review-Antwort** (Teil B), als Datei im Repo oder kurzes Doc.
3. **Walkthrough (1 Take, 3–5 min, max. 5):** ein Loom/Screen-Recording. Zeig dein Ergebnis und erklär, *wie* du gebaut hast, vor allem die KI-Schritte. *(Kein Video möglich oder gewünscht? Ein knappes schriftliches Walkthrough-Skript zählt als gleichwertig, sag einfach Bescheid.)*
4. **Kurzes Decision-Log + Schlüssel-Prompts:** 5–10 Zeilen Entscheidungen/Trade-offs plus die KI-Prompts, die den Unterschied gemacht haben. Zeig uns, *wie du mit KI zusammenarbeitest*; das ist genau die Fähigkeit, für die wir die Rolle besetzen.
5. **Selbst-Report:** wie viele Stunden hast du investiert? (Ehrlich, kein Maluspunkt.)

## So bewerten wir (transparent)

| Dimension | Gewicht |
|---|---|
| Funktionalität (läuft es, erfüllt es den Kern) | 20% |
| Decomposition & Urteil (Ambiguität sinnvoll gelöst, gute Trade-offs) | 20% |
| AI-Collaboration / Prozess (wie du KI gehebelt & geprüft hast) | 20% |
| Code-Qualität & Taste (lesbar, wartbar, KI-„Slop" erkannt) | 15% |
| Kommunikation / Doku (README, Decision-Log, Walkthrough) | 15% |
| Tests (sinnvolle Tests, kein Coverage-Theater) | 10% |

> Teil B (Code-Review) fließt nicht in die obige Gewichtung ein. Es ist ein separates Signal mit besonders hohem Informationsgehalt über dein Urteil zu KI-Code und kann bei knappen Entscheidungen den Ausschlag geben.

## Abgabe & Zeitplan

- **Deadline:** die Begleit-E-Mail nennt das verbindliche Abgabedatum (Richtwert: 7 Kalendertage ab Erhalt).
- **Abgabe:** per E-Mail an aiandbusinessgrowth@ai-at.eu.
- **Rückmeldung:** Wir melden uns innerhalb von ~10 Werktagen, mit einem Termin für den Live-Teil oder einer kurzen Rückmeldung.

> Die konkreten Daten (Abgabedatum, ggf. Upload-Link) findest du in der Begleit-E-Mail zu diesem Brief.

## Danach

Kurzer **Live-Walkthrough (30–45 min)**: du zeigst dein Ergebnis, wir setzen *live eine neue Anforderung* drauf (z. B. ein zweites Branchen-Profil oder ein zusätzlicher Score-Faktor) und schauen, wie du deinen eigenen Code erweiterst. Die neue Anforderung ist bewusst klein; es geht darum, wie du laut denkst, nicht um ein perfektes Ergebnis in 10 Minuten. Deine gewohnten KI-Tools darfst du dabei nutzen, genau wie beim Bauen. Danach zeigen wir dir unsere eigene Lösung und reden ehrlich darüber. Jede:r bekommt Feedback, egal wie's ausgeht.

> **Fair und transparent.** Diese Challenge ist unbezahlt. Dafür bekommst du echten Gegenwert: nach dem Debrief zeigen wir dir unsere eigene Lösung, mit echten Entscheidungen, Prompts und Trade-offs. Das ist unser „Learn"-Versprechen in Aktion. Und: strukturiertes, ehrliches Feedback für jede:n, egal wie der Prozess ausgeht. Kein Ghosting, nie.

## Spielregeln zu den Daten

> Das Seed-Dataset ist synthetisch / vereinfacht (Stand 2026-06), keine offizielle AI:AT-Position. Die Parlaments-Vorgänge sind an die reale Semantik der Open-Data-API des österreichischen Parlaments angelehnt (Typ, Status, Nummer/Zitation, Themen), aber frei erfunden: keine realen Gesetzgebungsverfahren, Nummern oder Inhalte. Jeder JSON-Eintrag trägt ein `_hinweis`-Feld. Behandle die Daten als Spielmaterial, nicht als parlamentarische Realität.

## Datenschutz

> **Datenschutz.** Deine Unterlagen (Repo-Link, Loom-Link, Dokumente, Prompts) nutzen wir ausschließlich für die Besetzungsentscheidung, geben sie nicht an unbeteiligte Dritte weiter und löschen sie spätestens **sechs Monate** nach Abschluss des Auswahlverfahrens (oder früher auf deinen Wunsch), gemäß DSGVO. Rechtsgrundlage ist die Anbahnung eines möglichen Arbeitsverhältnisses (Art. 6 DSGVO); du kannst jederzeit Auskunft oder Löschung verlangen. Was du erstellst, bleibt deins: wir verwenden es nur zur Bewertung, nie produktiv. Dein Repo kannst du auch privat halten und uns Zugriff geben; deinen Walkthrough sehen nur wir intern. Von dir gewählte Hosting-Dienste (z.B. GitHub, Loom) unterliegen deren eigenen Datenschutzbestimmungen. Fragen: aiandbusinessgrowth@ai-at.eu.

## Anhang A: Code-Snippet (Teil B)

Das ist das Snippet für Teil B: finde den Bug, fixe ihn, kritisiere kurz. (Auch als Datei: [`code-review/snippet.ts`](./code-review/snippet.ts).)

```ts
/**
 * priorisiereVorgaenge: Bewertet Parlaments-Vorgänge gegen ein Unternehmens-
 * Profil und gibt die WICHTIGSTEN Vorgänge zurück, die mit dem höchsten
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

// Demo-Daten: vereinfachte Illustration, NICHT der echte Datensatz (siehe ../data/vorgaenge.json).
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
```
