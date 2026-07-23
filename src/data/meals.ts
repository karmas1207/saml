import type { NutritionDay } from '../types'

export const nutritionDays: NutritionDay[] = [
  {
    id: 'monday', name: 'Måndag', shortName: 'Mån', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '4 ägg', '1 banan'], protein: 40 },
      { id: 'lunch', title: 'Lunch', items: ['250 g kycklinglårfilé', '150 g ris', 'Frysta grönsaker'], protein: 53, proteinLabel: '50–55 g' },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinshake enligt din portionsmängd'], protein: 60 },
      { id: 'evening', title: 'Kvällsmål', items: ['250 g kvarg', '50 g havregryn', 'Lite frysta bär'], protein: 33, proteinLabel: '30–35 g' },
      { id: 'bedtime', title: 'Innan läggdags', items: ['2 kokta ägg eller ett glas mjölk'], protein: 13, optional: true },
    ],
  },
  {
    id: 'tuesday', name: 'Tisdag', shortName: 'Tis', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['Havregrynsgröt med mjölk', '3 ägg', '1 banan'], protein: 33 },
      { id: 'lunch', title: 'Lunch', items: ['Kycklinglårfilé', 'Ris', 'Frysta grönsaker'], protein: 50 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinshake'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['Pasta', 'Tonfisk', 'Krossade tomater', 'Frysta grönsaker'], protein: 38 },
      { id: 'evening', title: 'Kvällsmål', items: ['Kvarg'], protein: 25 },
    ],
  },
  {
    id: 'wednesday', name: 'Onsdag', shortName: 'Ons', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '4 ägg', '1 banan'], protein: 40 },
      { id: 'lunch', title: 'Lunch', items: ['Linser eller bönor', 'Ris', '2 ägg', 'Frysta grönsaker'], protein: 35 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinshake'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['Kycklinglårfilé', 'Potatis eller ris', 'Frysta grönsaker'], protein: 50 },
      { id: 'evening', title: 'Kvällsmål', items: ['Kvarg och havregryn'], protein: 30 },
    ],
  },
  {
    id: 'thursday', name: 'Torsdag', shortName: 'Tors', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['Havregrynsgröt', '4 ägg', '1 banan'], protein: 38 },
      { id: 'lunch', title: 'Lunch', items: ['Kycklinglårfilé', 'Ris', 'Frysta grönsaker'], protein: 50 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinshake'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['Pasta', 'Tonfisk', 'Krossade tomater'], protein: 38 },
      { id: 'evening', title: 'Kvällsmål', items: ['Kvarg', 'Frysta bär om du vill'], protein: 25 },
    ],
  },
  {
    id: 'friday', name: 'Fredag', shortName: 'Fre', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['100 g havregryn', '3–4 ägg', '1 banan'], protein: 37 },
      { id: 'lunch', title: 'Lunch', items: ['Kycklinglårfilé', 'Ris', 'Frysta grönsaker'], protein: 50 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinshake'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['Omelett med 4 ägg', 'Potatis eller bröd', 'Grönsaker'], protein: 32 },
      { id: 'evening', title: 'Kvällsmål', items: ['Kvarg'], protein: 25 },
    ],
  },
  {
    id: 'saturday', name: 'Lördag', shortName: 'Lör', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['Havregrynsgröt', 'Ägg', 'Banan'], protein: 35 },
      { id: 'lunch', title: 'Lunch', items: ['Rester från tidigare måltider'], protein: 35 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinshake'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['Köttfärs eller kyckling – välj det billigaste', 'Ris eller pasta', 'Frysta grönsaker'], protein: 45 },
      { id: 'evening', title: 'Kvällsmål', items: ['Kvarg eller mjölk och havregryn'], protein: 28 },
    ],
  },
  {
    id: 'sunday', name: 'Söndag', shortName: 'Sön', meals: [
      { id: 'breakfast', title: 'Frukost', items: ['Havregryn', 'Ägg', 'Banan'], protein: 35 },
      { id: 'lunch', title: 'Lunch', items: ['Tonfiskpasta eller kyckling med ris'], protein: 45 },
      { id: 'snack', title: 'Mellanmål', items: ['Proteinshake'], protein: 60 },
      { id: 'dinner', title: 'Middag', items: ['Linser eller bönor', 'Ris', 'Ägg', 'Frysta grönsaker'], protein: 35 },
      { id: 'evening', title: 'Kvällsmål', items: ['Kvarg'], protein: 25 },
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
