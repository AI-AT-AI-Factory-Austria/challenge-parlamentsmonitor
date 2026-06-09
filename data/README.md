# Seed-Dataset: Felder & Hinweise

> ⚠️ **Das Dataset ist synthetisch und vereinfacht (Stand 2026-06) und keine offizielle AI:AT-Position.** Die Parlaments-Vorgänge sind an die reale Semantik der Open-Data-API des österreichischen Parlaments angelehnt (Typ, Status, Nummer/Zitation, Themen), aber frei erfunden: keine realen Gesetzgebungsverfahren, Nummern oder Inhalte. Kein Domänenwissen nötig, die Felder unten verstehst du ohne Vorwissen. Behandle die Daten als Spielmaterial, nicht als parlamentarische Realität.

## `vorgaenge.json` (21 parlamentarische Vorgänge)

Eine Liste synthetischer Gesetzesvorlagen, Anträge und Anfragen aus verschiedenen Branchen und mit unterschiedlichem Status, bewusst kontrastierend, damit der Agent je nach Profil unterschiedliche Top-Vorgänge liefert.

| Feld | Typ | Bedeutung |
|---|---|---|
| `_hinweis` | string | Synthetik-Disclaimer (Kurzform) |
| `gp` | string | Gesetzgebungsperiode (z. B. `"XXVII"`) |
| `typ` | string | Vorgangstyp: `Regierungsvorlage` / `Antrag` / `Anfrage` |
| `nummer` | string | Zitation/Nummer (z. B. `"1842 d.B."`, `"3107/A"`) |
| `titel` | string | Betreff/Titel des Vorgangs |
| `status` | string | `"in Verhandlung"` oder `"abgeschlossen"` |
| `datum` | string (ISO-Datum) | Einbringungs-/Sortierdatum, z. B. `"2026-05-28"` |
| `kurztext` | string | kurze Begründung/Wirkung (1–2 Sätze) |
| `branche` | string | primär betroffene Branche: `Energie` / `Finanz` / `Pharma` / `Telekom` / `Industrie` / `Querschnitt` |
| `themen` | string[] | Themen-Tags (z. B. `["Energie", "Wirtschaft"]`) |

**Datenverteilung:** 6 Branchen (Energie 5×, Finanz 4×, Pharma 3×, Telekom 4×, Industrie 4×, Querschnitt 1×), 3 Typen, 2 Status, Datumsspanne 2026-01 … 2026-05.

## `examples/profil_energie.json` (Beispiel-Unternehmensprofil)

Ausgangspunkt für deine Arbeit: ein Profil eines Regulatory-Affairs-Teams.

| Feld | Typ | Bedeutung |
|---|---|---|
| `_hinweis` | string | Synthetik-Disclaimer (Kurzform) |
| `name` | string | Bezeichnung des Profils / der Rolle |
| `branche` | string | Branche des Unternehmens (matcht `vorgaenge[].branche`) |
| `themen_interessen` | string[] | relevante Themen-Tags (matcht gegen `vorgaenge[].themen`) |
| `impact_schwelle` | number | Mindest-Impact-Score (0–100), ab dem ein Vorgang in den Digest kommt |

## Live-Daten (optional, Dev-Stretch)

Echte parlamentarische Vorgänge liefert die Open-Data-API des österreichischen Parlaments, ohne API-Key:

```
POST https://www.parlament.gv.at/Filter/api/filter/data/101?js=eval&showAll=true
```

Das ist ein optionaler Stretch; der mitgelieferte Seed reicht für die Aufgabe vollständig aus.
