import type { IllustrationType } from '../types'

interface Props {
  type: IllustrationType
  exerciseName: string
}

export function ExerciseIllustration({ type, exerciseName }: Props) {
  return (
    <figure className="exercise-illustration">
      <img
        src={`/exercises/${type}.webp`}
        alt={`Träningsillustration för ${exerciseName} som visar start- och slutposition`}
        loading="lazy"
        width="512"
        height="512"
      />
      <figcaption>Startposition → slutposition · sänk kontrollerat</figcaption>
    </figure>
  )
}
