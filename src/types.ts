export const dayIds = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const
export type DayId = (typeof dayIds)[number]

export type WorkoutType = 'strength' | 'recovery' | 'rest'

export type IllustrationType =
  | 'incline-press'
  | 'flat-press'
  | 'shoulder-press'
  | 'lateral-raise'
  | 'triceps'
  | 'pushup'
  | 'row'
  | 'rear-delt'
  | 'shrug'
  | 'curl'
  | 'hammer-curl'
  | 'squat'
  | 'split-squat'
  | 'rdl'
  | 'calf-raise'
  | 'plank'
  | 'leg-raise'

export interface Exercise {
  id: string
  name: string
  muscles: string[]
  sets: number
  reps: string
  rest: string
  equipment: string
  instruction: string
  technique: string
  mistakes: string
  illustration: IllustrationType
}

export interface DayActivity {
  id: string
  label: string
  detail?: string
  exclusive?: boolean
}

export interface WorkoutDay {
  id: DayId
  name: string
  shortName: string
  title: string
  type: WorkoutType
  muscles: string[]
  duration: string
  exercises: Exercise[]
  activities?: DayActivity[]
  message?: string
}

export interface Meal {
  id: string
  title: string
  items: string[]
  protein: number
  proteinLabel?: string
  optional?: boolean
}

export interface NutritionDay {
  id: DayId
  name: string
  shortName: string
  meals: Meal[]
}

export interface ShoppingItem {
  id: string
  label: string
  optional?: boolean
}

export interface WeightEntry {
  id: string
  date: string
  weight: number
  note: string
}

export interface CustomShoppingItem {
  id: string
  label: string
}

export interface AppData {
  version: 1
  weekKey: string
  selectedWorkoutDay: DayId
  selectedNutritionDay: DayId
  completedExercises: Record<string, boolean>
  completedSets: Record<string, boolean>
  notes: Record<string, string>
  activities: Record<string, boolean>
  completedMeals: Record<string, boolean>
  completedRoutine: Record<string, boolean>
  shoppingChecked: Record<string, boolean>
  customShoppingItems: CustomShoppingItem[]
  weights: WeightEntry[]
}
