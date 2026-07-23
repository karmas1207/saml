import { useCallback, useEffect, useState } from 'react'
import { BottomNavigation, type MainTab } from './components/BottomNavigation'
import { Header } from './components/Header'
import { NutritionView } from './components/NutritionView'
import { TrainingView } from './components/TrainingView'
import { loadData, resetWeeklyData, saveData } from './storage'
import type { AppData } from './types'

function App() {
  const [tab, setTab] = useState<MainTab>('training')
  const [data, setData] = useState<AppData>(loadData)

  useEffect(() => saveData(data), [data])

  const changeData = useCallback((updater: (current: AppData) => AppData) => setData(updater), [])
  const changeTab = (nextTab: MainTab) => {
    setTab(nextTab)
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Hoppa till innehåll</a>
      <Header />
      {tab === 'training' ? <TrainingView data={data} onChange={changeData} onStartNewWeek={() => setData((current) => resetWeeklyData(current))} /> : <NutritionView data={data} onChange={changeData} />}
      <footer><span>Workout 4 Karo</span><p>Små steg. Varje vecka.</p></footer>
      <BottomNavigation active={tab} onChange={changeTab} />
    </div>
  )
}

export default App
