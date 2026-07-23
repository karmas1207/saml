# Workout 4 Karo

En färdig, mobilanpassad webbapp för hemmaträning och kostplanering. Appen är helt på svenska, fungerar utan konto eller backend och sparar alla framsteg lokalt i webbläsaren.

## Starta projektet

Du behöver en aktuell version av Node.js (rekommenderat: Node.js 20 eller senare).

```bash
npm install
npm run dev
```

Öppna adressen som Vite visar, normalt `http://localhost:5173`.

Skapa en produktionsbuild med:

```bash
npm run build
```

Förhandsgranska produktionsbuilden med:

```bash
npm run preview
```

## Funktioner

- Träningsprogram för veckans alla sju dagar.
- Setspårning, övningsstatus, anteckningar och vilotimer på 60, 75 eller 90 sekunder.
- Lokala, återanvändbara SVG-diagram för samtliga styrkeövningar.
- Aktiv vila, promenader, veckostatistik och säker återställning av veckan.
- Veckomeny, proteinräknare, daglig rutin och interaktiv inköpslista.
- Viktlogg med startvikt, senaste vikt och total förändring.
- Versionshanterad och validerad lagring i `localStorage`.
- Tangentbordsnavigering, synliga fokusmarkeringar, god kontrast och stöd för `prefers-reduced-motion`.

## Projektstruktur

```text
src/
  components/       Återanvändbara gränssnittskomponenter
  data/             Träningspass, måltider och inköpslista
  App.tsx            Appens huvudvy och fliknavigation
  storage.ts         Säker, versionshanterad localStorage
  styles.css         Mobilförst och responsiv design
  types.ts           Gemensamma TypeScript-typer
```

## Lokal data

All personlig data ligger endast i den aktuella webbläsaren under nyckeln `workout4karo:data`. Veckans markeringar återställs automatiskt när en ny kalendervecka börjar. Knappen **Starta ny vecka** kan också användas manuellt. Viktloggen bevaras när en ny vecka startas.

Om webbläsarens lagring innehåller felaktig eller äldre data använder appen säkra standardvärden i stället för att krascha.
