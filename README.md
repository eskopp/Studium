# Studium

Mitschriften, Übungen und Unterlagen zum Physikstudium (TU Ilmenau, Technische Physik). Die Seite liegt unter https://studium.erikskopp.de und ist mit Astro und dem Theme [AstroStudium](https://github.com/eskopp/AstroStudium) gebaut.

Das Grundpraktikum liegt separat in `Grundpraktikum-der-Physik-1`.

## Aufbau

- `src/content/docs/`: die Artikel, gegliedert nach Semester, Modul und Reiter (`ws-26-27/experimentalphysik-1/skript/`), Startseite in `src/content/docs/index.md`
- `src/components/`: interaktive Widgets für einzelne Artikel (`Dichte.astro`, `Torsion.astro`)
- `public/`: Dateien, die unverändert veröffentlicht werden (Favicon, Logo, `CNAME`, Bilder)
- `astro.config.mjs`: Konfiguration des Themes (Name, Logo, Bearbeiten-Link)
- `.github/workflows/deploy.yml`: baut die Seite bei jedem Push auf `main` und veröffentlicht sie auf GitHub Pages

## Lokal bauen

```bash
npm install
npm run dev      # Vorschau unter http://localhost:4321
npm run build    # fertige Seite in dist/
```

Die Suche gibt es nur in der gebauten Seite (`npm run build`, dann `npm run preview`).

## Theme aktualisieren

Das Theme ist per Git-Abhängigkeit eingebunden, die `.npmrc` erlaubt das mit `allow-git=all`. Der Stand steckt in `package-lock.json`.

```bash
npm update astrostudium
```
