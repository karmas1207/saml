import { Pause, Play, RotateCcw, Timer } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const timerOptions = [60, 75, 90]

export function RestTimer() {
  const [selected, setSelected] = useState(60)
  const [remaining, setRemaining] = useState(60)
  const [running, setRunning] = useState(false)
  const notifiedRef = useRef(false)

  useEffect(() => {
    if (!running || remaining <= 0) return
    const timer = window.setInterval(() => setRemaining((value) => Math.max(0, value - 1)), 1000)
    return () => window.clearInterval(timer)
  }, [running, remaining])

  useEffect(() => {
    if (remaining !== 0 || notifiedRef.current) return
    notifiedRef.current = true
    setRunning(false)
    if ('vibrate' in navigator) navigator.vibrate([180, 100, 180])
  }, [remaining])

  const choose = (seconds: number) => {
    setSelected(seconds)
    setRemaining(seconds)
    setRunning(false)
    notifiedRef.current = false
  }

  const reset = () => {
    setRemaining(selected)
    setRunning(false)
    notifiedRef.current = false
  }

  const display = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`

  return (
    <div className={`rest-timer ${remaining === 0 ? 'finished' : ''}`} aria-live="polite">
      <div className="timer-heading"><span><Timer size={18} /> Vilotimer</span><strong>{remaining === 0 ? 'Klart!' : display}</strong></div>
      <div className="timer-options" aria-label="Välj vilotid">
        {timerOptions.map((seconds) => <button key={seconds} className={selected === seconds ? 'selected' : ''} onClick={() => choose(seconds)}>{seconds} s</button>)}
      </div>
      <div className="timer-controls">
        <button className="timer-main" onClick={() => { notifiedRef.current = false; setRunning((value) => !value) }} disabled={remaining === 0}>
          {running ? <><Pause size={17} /> Pausa</> : <><Play size={17} /> Starta</>}
        </button>
        <button className="icon-button" aria-label="Återställ timer" onClick={reset}><RotateCcw size={18} /></button>
      </div>
    </div>
  )
}
