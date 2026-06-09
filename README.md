# Parlamentsmonitor: AI:AT Challenge

Schön, dass du dabei bist. Dieses Repo enthält alles, was du zum Loslegen brauchst: Aufgabenstellung, Daten und (für die Dev-Rolle) das Code-Snippet.

> Das hier ist kein Trick-Test, sondern ein kleines, echtes Stück Venture-Studio-Arbeit: mit KI schnell etwas Wertvolles bauen bzw. eine Idee auf Marktreife prüfen. Es gibt keine Musterlösung, die du treffen musst. Wir schauen, wie du ein unscharf spezifiziertes Problem zerlegst, Entscheidungen triffst und KI sinnvoll einsetzt.

## Das Szenario: „Parlamentsmonitor"

Regulatory-Affairs- und Legal-Teams in regulierten Branchen (Energie, Finanz, Pharma, Telekom) verlieren täglich Zeit damit, parlamentarische Websites und RIS-Listen manuell zu durchforsten, auf der Suche nach Gesetzesentwürfen und Anträgen, die das eigene Unternehmen betreffen. Wer zu spät reagiert, verpasst Stellungnahmefristen oder wird von neuen Compliance-Pflichten überrascht.

„Parlamentsmonitor" nimmt eine Liste parlamentarischer Vorgänge und ein Unternehmensprofil, fasst je Vorgang die Wirkung fürs Unternehmen zusammen, vergibt einen Impact-Score und gibt das Ergebnis als priorisierten Digest aus: das Frühwarn-Briefing, das morgens auf dem Schreibtisch liegt.

## Wähle deine Challenge

| Rolle | Worum geht's | Start hier |
|---|---|---|
| **AI Developer** | Bau den Parlamentsmonitor-Agent + ein kurzes Code-Review | 📂 [`dev/`](./dev/) |
| **AI Business Analyst & Venture Builder** | Ist das ein Geschäft? Business Case + Go-to-Market | 📂 [`business/`](./business/) |

> Du weißt aus dem Gespräch mit uns, welche Rolle deine ist. Leg einfach im passenden Ordner los. Falls unklar, welche Rolle deine ist, frag kurz per Mail nach. (Neugierig auf die andere Seite? Gern reinschauen, für deine Abgabe zählt nur dein Ordner.)

## Die Daten (`data/`)

Beide Rollen teilen sich dieselbe Datengrundlage:

- [`data/vorgaenge.json`](./data/vorgaenge.json): 21 synthetische parlamentarische Vorgänge (Felder dokumentiert in [`data/README.md`](./data/README.md))
- [`data/examples/profil_energie.json`](./data/examples/profil_energie.json): ein Beispiel-Unternehmensprofil als Ausgangspunkt

> ⚠️ Synthetisch / vereinfacht, Stand 2026-06, keine offizielle AI:AT-Position. Die Vorgänge sind an die reale Semantik der Open-Data-API des österreichischen Parlaments angelehnt, aber frei erfunden: keine realen Gesetzgebungsverfahren, Nummern oder Inhalte. Kein Domänenwissen nötig, die Felder sind selbsterklärend und in [`data/README.md`](./data/README.md) dokumentiert. *(Business-Rolle: die Markt-/Preis-Zahlen fürs Sizing stecken nicht in den Daten, die recherchierst du frei, siehe deinen Brief.)*

## Das Wichtigste in Kürze

- **Aufwand:** ~4–6 fokussierte Stunden. Du hast 7 Kalendertage ab Erhalt, das Fenster ist für Flexibilität, nicht zum Durchgrinden.
- **KI:** Nutze jede KI, jede Library, google frei. Das wird erwartet, nicht nur erlaubt.
- **Abgabe:** per E-Mail an aiandbusinessgrowth@ai-at.eu. Für deinen Code und deine Doku erstellst du ein eigenes Repo (z. B. `git init` in deinem Arbeitsordner, oder dieses Repo als Vorlage klonen und zu deinem GitHub/GitLab pushen) und schickst uns den Link. Die konkreten Daten (Abgabedatum, ggf. Upload-Link) stehen in deiner Begleit-E-Mail.
- **Bewertung:** transparent, die Gewichtung findest du in deinem Rollen-Brief.
- **Wichtig:** Ein rauer Kern mit klarem Denken schlägt eine polierte, oberflächliche Umsetzung. Mehr Stunden bedeuten bei uns nicht mehr Punkte.

## Fair und transparent

AI Factory Austria steht für Chancengleichheit. Ob Uni, Bootcamp oder self-taught: es zählt, wie du denkst und mit KI arbeitest. Brauchst du Unterstützung oder Anpassungen im Prozess, sag uns Bescheid. Die Challenge ist unbezahlt. Dafür bekommst du echten Gegenwert: nach dem Debrief zeigen wir dir unsere eigene Lösung (mit echten Entscheidungen, Prompts und Trade-offs) und strukturiertes, ehrliches Feedback für jede:n. Kein Ghosting, nie.

> Was du hier nicht findest, ist unsere eigene Referenzlösung. Die heben wir bewusst für den gemeinsamen Debrief auf, damit du frei und ohne Anchoring an die Aufgabe gehst.

*AI:AT Hiring Team*
