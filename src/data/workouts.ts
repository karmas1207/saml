import type { Exercise, WorkoutDay } from '../types'

const exercises = {
  inclinePress: {
    id: 'incline-press', name: 'Lutande hantelpress', muscles: ['Bröst', 'Främre axlar', 'Triceps'], sets: 4, reps: '10–20', rest: '60–90 sek', equipment: 'Två hantlar och lutande bänk', illustration: 'incline-press',
    instruction: 'Ligg på en lätt lutande bänk och pressa hantlarna uppåt över bröstet.',
    technique: 'Håll skulderbladen bakåt och nedåt. Sänk kontrollerat.',
    mistakes: 'För brant bänk, för snabb sänkning eller armbågar för långt ut.',
  },
  flatPress: {
    id: 'flat-press', name: 'Hantelpress plant', muscles: ['Bröst', 'Triceps'], sets: 4, reps: '10–20', rest: '60–90 sek', equipment: 'Två hantlar och plan bänk', illustration: 'flat-press',
    instruction: 'Pressa hantlarna från brösthöjd till raka armar.',
    technique: 'Ha fötterna stabilt i golvet och håll bröstet lätt upplyft.',
    mistakes: 'Studsa vikterna, tappa skulderpositionen eller översträcka armbågarna.',
  },
  shoulderPress: {
    id: 'shoulder-press', name: 'Axelpress', muscles: ['Axlar', 'Triceps'], sets: 4, reps: '10–20', rest: '60–90 sek', equipment: 'Två hantlar och bänk', illustration: 'shoulder-press',
    instruction: 'Sitt upprätt och pressa hantlarna från axelhöjd upp över huvudet.',
    technique: 'Spänn magen och håll ryggen stabil.',
    mistakes: 'Svanka för mycket eller föra hantlarna för långt bakom huvudet.',
  },
  lateralRaise: {
    id: 'lateral-raise', name: 'Sidolyft', muscles: ['Sida axlar'], sets: 5, reps: '15–25', rest: '60 sek', equipment: 'Två hantlar', illustration: 'lateral-raise',
    instruction: 'Lyft hantlarna åt sidorna tills armarna är ungefär parallella med golvet.',
    technique: 'Håll armbågarna lätt böjda och rörelsen kontrollerad.',
    mistakes: 'Gunga med kroppen eller lyfta axlarna mot öronen.',
  },
  triceps: {
    id: 'overhead-triceps', name: 'Triceps över huvudet', muscles: ['Triceps'], sets: 4, reps: '12–20', rest: '60 sek', equipment: 'En hantel', illustration: 'triceps',
    instruction: 'Håll en hantel över huvudet och böj armbågarna så att vikten sänks bakom huvudet.',
    technique: 'Håll armbågarna riktade framåt.',
    mistakes: 'Låta armbågarna falla ut åt sidorna eller svanka kraftigt.',
  },
  pushup: {
    id: 'pushup', name: 'Armhävningar', muscles: ['Bröst', 'Triceps', 'Bål'], sets: 2, reps: 'Till failure med god teknik', rest: '90 sek', equipment: 'Ingen', illustration: 'pushup',
    instruction: 'Sänk kroppen kontrollerat och pressa tillbaka upp.',
    technique: 'Håll kroppen rak och spänn mage och säte.',
    mistakes: 'Höften sjunker, armbågarna går för långt ut eller rörelsen blir för kort.',
  },
  row: {
    id: 'one-arm-row', name: 'Enarmsrodd', muscles: ['Rygg', 'Biceps'], sets: 5, reps: '12–20 per arm', rest: '60–90 sek', equipment: 'En hantel och bänk', illustration: 'row',
    instruction: 'Stöd ena handen och knät på bänken och dra hanteln mot höften.',
    technique: 'Håll ryggen neutral och dra armbågen bakåt.',
    mistakes: 'Rotera överkroppen eller dra hanteln mot axeln.',
  },
  rearDelt: {
    id: 'rear-delt-fly', name: 'Rear delt flyes på bänk', muscles: ['Bakre axlar', 'Övre rygg'], sets: 4, reps: '15–25', rest: '60 sek', equipment: 'Två hantlar och lutande bänk', illustration: 'rear-delt',
    instruction: 'Ligg med bröstet mot bänken och lyft armarna ut åt sidorna.',
    technique: 'Använd lätt böjda armbågar och fokusera på bakre axlar.',
    mistakes: 'Använda för mycket fart eller dra axlarna uppåt.',
  },
  shrug: {
    id: 'shrug', name: 'Shrugs', muscles: ['Trapezius'], sets: 4, reps: '20', rest: '60 sek', equipment: 'Två hantlar', illustration: 'shrug',
    instruction: 'Lyft axlarna rakt upp mot öronen och sänk långsamt.',
    technique: 'Pausa kort i toppläget.',
    mistakes: 'Rulla axlarna eller använda benen för att skapa fart.',
  },
  curl: {
    id: 'biceps-curl', name: 'Bicepscurl', muscles: ['Biceps'], sets: 4, reps: '10–20', rest: '60 sek', equipment: 'Två hantlar', illustration: 'curl',
    instruction: 'Böj armbågarna och lyft hantlarna mot axlarna.',
    technique: 'Håll överarmarna stilla intill kroppen.',
    mistakes: 'Gunga med ryggen eller föra armbågarna framåt.',
  },
  hammerCurl: {
    id: 'hammer-curl', name: 'Hammercurl', muscles: ['Biceps', 'Underarmar'], sets: 4, reps: '12–20', rest: '60 sek', equipment: 'Två hantlar', illustration: 'hammer-curl',
    instruction: 'Curla hantlarna med handflatorna riktade mot varandra.',
    technique: 'Håll handlederna neutrala.',
    mistakes: 'Använda fart eller förkorta rörelsen.',
  },
  squat: {
    id: 'goblet-squat', name: 'Goblet squat', muscles: ['Framsida lår', 'Säte'], sets: 5, reps: '20', rest: '60–90 sek', equipment: 'En hantel', illustration: 'squat',
    instruction: 'Håll hanteln framför bröstet och sätt dig ned i en kontrollerad knäböj.',
    technique: 'Håll knäna i samma riktning som tårna och bröstet upprätt.',
    mistakes: 'Knäna faller inåt eller hälarna lyfter.',
  },
  splitSquat: {
    id: 'split-squat', name: 'Bulgarian split squat', muscles: ['Framsida lår', 'Säte'], sets: 4, reps: '15 per ben', rest: '60–90 sek', equipment: 'Hantlar och bänk', illustration: 'split-squat',
    instruction: 'Placera den bakre foten på bänken och sänk kroppen med främre benet.',
    technique: 'Håll större delen av vikten på främre foten.',
    mistakes: 'För kort steg, instabilt knä eller för mycket vikt på bakre benet.',
  },
  rdl: {
    id: 'rdl', name: 'Rumänska marklyft', muscles: ['Baksida lår', 'Säte', 'Rygg'], sets: 4, reps: '15', rest: '60–90 sek', equipment: 'Två hantlar', illustration: 'rdl',
    instruction: 'För höfterna bakåt och sänk hantlarna längs benen.',
    technique: 'Håll ryggen neutral och knäna lätt böjda.',
    mistakes: 'Runda ryggen eller göra övningen som en knäböj.',
  },
  calfRaise: {
    id: 'calf-raise', name: 'Vadpress', muscles: ['Vader'], sets: 5, reps: '30', rest: '45–60 sek', equipment: 'Hantlar', illustration: 'calf-raise',
    instruction: 'Lyft hälarna så högt som möjligt och sänk långsamt.',
    technique: 'Pausa i toppläget och använd full rörelse.',
    mistakes: 'Studsa eller göra för korta repetitioner.',
  },
  plank: {
    id: 'plank', name: 'Planka', muscles: ['Mage', 'Bål'], sets: 3, reps: '60 sek', rest: '60 sek', equipment: 'Ingen', illustration: 'plank',
    instruction: 'Håll kroppen rak med underarmarna i golvet.',
    technique: 'Spänn mage och säte.',
    mistakes: 'Höften sjunker eller lyfts för högt.',
  },
  legRaise: {
    id: 'leg-raise', name: 'Benlyft', muscles: ['Mage', 'Höftböjare'], sets: 3, reps: '20', rest: '60 sek', equipment: 'Bänk eller golv', illustration: 'leg-raise',
    instruction: 'Lyft benen kontrollerat och sänk dem utan att tappa magspänningen.',
    technique: 'Pressa ländryggen mot underlaget.',
    mistakes: 'Svanka eller använda fart.',
  },
} satisfies Record<string, Exercise>

const variant = (base: Exercise, changes: Partial<Exercise>): Exercise => ({ ...base, ...changes })

export const workouts: WorkoutDay[] = [
  {
    id: 'monday', name: 'Måndag', shortName: 'Mån', title: 'Bröst, axlar och triceps', type: 'strength', muscles: ['Bröst', 'Axlar', 'Triceps'], duration: '45–60 min',
    exercises: [exercises.inclinePress, exercises.flatPress, exercises.shoulderPress, exercises.lateralRaise, exercises.triceps, exercises.pushup],
  },
  {
    id: 'tuesday', name: 'Tisdag', shortName: 'Tis', title: 'Rygg och biceps', type: 'strength', muscles: ['Rygg', 'Bakre axlar', 'Biceps'], duration: '40–55 min',
    exercises: [exercises.row, exercises.rearDelt, exercises.shrug, exercises.curl, exercises.hammerCurl],
  },
  {
    id: 'wednesday', name: 'Onsdag', shortName: 'Ons', title: 'Aktiv vila', type: 'recovery', muscles: ['Återhämtning', 'Rörlighet'], duration: '30 min', exercises: [],
    activities: [
      { id: 'strength-rest', label: 'Vila från styrketräning' },
      { id: 'walk', label: '30 minuters promenad' },
      { id: 'mobility', label: 'Lätt rörlighet', detail: 'Om det känns bra i kroppen.' },
    ],
    message: 'Återhämtningen är en del av träningen.',
  },
  {
    id: 'thursday', name: 'Torsdag', shortName: 'Tors', title: 'Överkropp, fokus volym', type: 'strength', muscles: ['Bröst', 'Axlar', 'Rygg', 'Armar'], duration: '45–60 min',
    exercises: [
      variant(exercises.inclinePress, { id: 'incline-press-volume', reps: '12–20' }),
      variant(exercises.shoulderPress, { id: 'shoulder-press-volume', reps: '12–20' }),
      variant(exercises.lateralRaise, { id: 'lateral-raise-volume', reps: '20' }),
      variant(exercises.row, { id: 'one-arm-row-volume', sets: 4, reps: '15 per arm' }),
      variant(exercises.curl, { id: 'biceps-curl-volume', sets: 3, reps: '15' }),
      variant(exercises.triceps, { id: 'overhead-triceps-volume', sets: 3, reps: '15' }),
    ],
  },
  {
    id: 'friday', name: 'Fredag', shortName: 'Fre', title: 'Ben och mage', type: 'strength', muscles: ['Framsida lår', 'Baksida lår', 'Säte', 'Vader', 'Mage'], duration: '45–60 min',
    exercises: [exercises.squat, exercises.splitSquat, exercises.rdl, exercises.calfRaise, exercises.plank, exercises.legRaise],
  },
  {
    id: 'saturday', name: 'Lördag', shortName: 'Lör', title: 'Vila eller promenad', type: 'recovery', muscles: ['Återhämtning'], duration: 'Valfritt', exercises: [],
    activities: [
      { id: 'full-rest', label: 'Fullständig vila', exclusive: true },
      { id: 'walk', label: 'Lugn promenad', exclusive: true },
    ],
    message: 'Välj det som kroppen behöver idag.',
  },
  {
    id: 'sunday', name: 'Söndag', shortName: 'Sön', title: 'Vila och förberedelse', type: 'rest', muscles: ['Återhämtning'], duration: 'Vilodag', exercises: [],
    activities: [
      { id: 'rest', label: 'Vila' },
      { id: 'meal-prep', label: 'Förbered mat inför veckan' },
      { id: 'review', label: 'Kontrollera veckans träningsresultat' },
      { id: 'sleep', label: 'Prioritera sömn' },
    ],
  },
]

export const workoutByDay = Object.fromEntries(workouts.map((day) => [day.id, day])) as Record<WorkoutDay['id'], WorkoutDay>

export const strengthDays = workouts.filter((day) => day.type === 'strength')
