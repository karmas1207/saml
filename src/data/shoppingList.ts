import type { ShoppingItem } from '../types'

export const shoppingItems: ShoppingItem[] = [
  { id: 'oats', label: '2 kg havregryn' },
  { id: 'eggs', label: '30 ägg' },
  { id: 'chicken', label: '2 kg kycklinglårfilé' },
  { id: 'rice', label: '2 kg ris' },
  { id: 'vegetables', label: '2 kg frysta grönsaker' },
  { id: 'bananas', label: '7–10 bananer' },
  { id: 'quark', label: '7 burkar eller cirka 2 kg kvarg' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'tuna', label: 'Tonfisk' },
  { id: 'tomatoes', label: 'Krossade tomater' },
  { id: 'lentils', label: 'Linser eller bönor' },
  { id: 'potatoes', label: 'Potatis' },
  { id: 'milk', label: 'Mjölk' },
  { id: 'berries', label: 'Frysta bär', optional: true },
  { id: 'creatine', label: 'Kreatin monohydrat', optional: true },
  { id: 'protein', label: 'Proteinpulver (finns redan)' },
]
