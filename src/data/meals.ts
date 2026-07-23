import type { NutritionDay } from '../types'

export const nutritionDays: NutritionDay[] = [
  {
    id: 'monday', name: 'Måndag', shortName: 'Mån', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '4 ägg', '1 banan'], protein: 40 },
      { id: 'lunch', title: 'Lunch', items: ['250 g kycklinglårfilé (rå vikt)', '150 g ris (okokt vikt)', '200 g frysta grönsaker'], protein: 53, proteinLabel: '50–55 g' },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinpulver i den mängd som ger cirka 60 g protein'], protein: 60 },
      { id: 'evening', title: 'Kvällsmål', items: ['250 g kvarg', '50 g havregryn', '100 g frysta bär'], protein: 33, proteinLabel: '30–35 g' },
      { id: 'bedtime', title: 'Innan läggdags', items: ['2 kokta ägg eller 3 dl mjölk'], protein: 13, optional: true },
    ],
  },
  {
    id: 'tuesday', name: 'Tisdag', shortName: 'Tis', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn med 3 dl mjölk', '3 ägg', '1 banan'], protein: 43, proteinLabel: '40–45 g' },
      { id: 'lunch', title: 'Lunch', items: ['250 g kycklinglårfilé (rå vikt)', '150 g ris (okokt vikt)', '200 g frysta grönsaker'], protein: 53, proteinLabel: '50–55 g' },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinpulver i den mängd som ger cirka 60 g protein'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['100 g pasta (okokt vikt)', '1 burk tonfisk, cirka 150 g avrunnen', '200 g krossade tomater', '150 g frysta grönsaker'], protein: 45 },
      { id: 'evening', title: 'Kvällsmål', items: ['250 g kvarg'], protein: 25 },
    ],
  },
  {
    id: 'wednesday', name: 'Onsdag', shortName: 'Ons', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '4 ägg', '1 banan'], protein: 40 },
      { id: 'lunch', title: 'Lunch', items: ['250 g kokta linser eller bönor', '150 g ris (okokt vikt)', '2 ägg', '200 g frysta grönsaker'], protein: 40 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinpulver i den mängd som ger cirka 60 g protein'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['250 g kycklinglårfilé (rå vikt)', '400 g potatis eller 150 g ris (okokt vikt)', '200 g frysta grönsaker'], protein: 53, proteinLabel: '50–55 g' },
      { id: 'evening', title: 'Kvällsmål', items: ['250 g kvarg', '50 g havregryn'], protein: 30 },
    ],
  },
  {
    id: 'thursday', name: 'Torsdag', shortName: 'Tors', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '4 ägg', '1 banan'], protein: 40 },
      { id: 'lunch', title: 'Lunch', items: ['250 g kycklinglårfilé (rå vikt)', '150 g ris (okokt vikt)', '200 g frysta grönsaker'], protein: 53, proteinLabel: '50–55 g' },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinpulver i den mängd som ger cirka 60 g protein'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['100 g pasta (okokt vikt)', '1 burk tonfisk, cirka 150 g avrunnen', '200 g krossade tomater'], protein: 45 },
      { id: 'evening', title: 'Kvällsmål', items: ['250 g kvarg', '100 g frysta bär om du vill'], protein: 25 },
    ],
  },
  {
    id: 'friday', name: 'Fredag', shortName: 'Fre', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '3–4 ägg', '1 banan'], protein: 37 },
      { id: 'lunch', title: 'Lunch', items: ['250 g kycklinglårfilé (rå vikt)', '150 g ris (okokt vikt)', '200 g frysta grönsaker'], protein: 53, proteinLabel: '50–55 g' },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinpulver i den mängd som ger cirka 60 g protein'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['Omelett med 4 ägg', '400 g potatis eller 2 skivor fullkornsbröd', '200 g grönsaker'], protein: 32 },
      { id: 'evening', title: 'Kvällsmål', items: ['250 g kvarg'], protein: 25 },
    ],
  },
  {
    id: 'saturday', name: 'Lördag', shortName: 'Lör', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '4 ägg', '1 banan'], protein: 40 },
      { id: 'lunch', title: 'Lunch', items: ['Rester med minst 200 g kyckling eller köttfärs', '150 g ris eller 100 g pasta (okokt vikt)', '200 g grönsaker'], protein: 45 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinpulver i den mängd som ger cirka 60 g protein'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['200 g nötfärs eller 250 g kycklinglårfilé (rå vikt)', '150 g ris eller 100 g pasta (okokt vikt)', '200 g frysta grönsaker'], protein: 45 },
      { id: 'evening', title: 'Kvällsmål', items: ['250 g kvarg eller 3 dl mjölk med 50 g havregryn'], protein: 28 },
    ],
  },
  {
    id: 'sunday', name: 'Söndag', shortName: 'Sön', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '4 ägg', '1 banan'], protein: 40 },
      { id: 'lunch', title: 'Lunch', items: ['1 burk tonfisk, cirka 150 g avrunnen, eller 250 g kycklinglårfilé', '100 g pasta eller 150 g ris (okokt vikt)', '200 g grönsaker'], protein: 45 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinpulver i den mängd som ger cirka 60 g protein'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['250 g kokta linser eller bönor', '150 g ris (okokt vikt)', '2 ägg', '200 g frysta grönsaker'], protein: 40 },
      { id: 'evening', title: 'Kvällsmål', items: ['250 g kvarg'], protein: 25 },
    ],
  },
]

export const nutritionByDay = Object.fromEntries(nutritionDays.map((day) => [day.id, day])) as Record<NutritionDay['id'], NutritionDay>

export const routineItems = [
  { id: 'breakfast', time: '07.00', label: 'Frukost' },
  { id: 'lunch', time: '12.00', label: 'Lunch' },
  { id: 'shake', time: '16.00', label: 'Proteinshake' },
  { id: 'training', time: '18.00', label: 'Träning' },
  { id: 'dinner', time: '19.30', label: 'Middag eller kvarg' },
  { id: 'sleep', time: '22.30', label: 'Sova' },
]
