import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Workout 4 Karo kunde inte visa sidan.', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="fallback" role="alert">
          <span className="eyebrow">Något gick snett</span>
          <h1>Vi kunde inte visa sidan.</h1>
          <p>Dina sparade uppgifter finns kvar. Ladda om sidan och försök igen.</p>
          <button className="primary-button" onClick={() => window.location.reload()}>Ladda om</button>
        </main>
      )
    }
    return this.props.children
  }
}
