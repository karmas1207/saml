import type { IllustrationType } from '../types'

const strokeProps = { stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }

function StandingPose({ type, end }: { type: IllustrationType; end: boolean }) {
  const isSquat = type === 'squat'
  const isSplit = type === 'split-squat'
  const isRdl = type === 'rdl'
  const isCalf = type === 'calf-raise'
  const headY = isSquat && end ? 50 : isRdl && end ? 43 : 28
  const shoulderY = headY + 15
  const hipY = isSquat && end ? 89 : isRdl && end ? 67 : 78
  const arm: [number, number, number, number][] = (() => {
    if (type === 'shoulder-press') return end ? [[54, shoulderY, 44, 17], [58, shoulderY, 68, 17]] : [[54, shoulderY, 38, 58], [58, shoulderY, 74, 58]]
    if (type === 'lateral-raise' || type === 'rear-delt') return end ? [[54, shoulderY, 18, shoulderY + 2], [58, shoulderY, 94, shoulderY + 2]] : [[54, shoulderY, 43, 76], [58, shoulderY, 69, 76]]
    if (type === 'triceps') return end ? [[53, shoulderY, 50, 14], [59, shoulderY, 62, 14]] : [[53, shoulderY, 48, 23], [59, shoulderY, 64, 23], [48, 23, 58, 39], [64, 23, 58, 39]]
    if (type === 'shrug') return [[53, shoulderY + (end ? -5 : 0), 41, 79], [59, shoulderY + (end ? -5 : 0), 71, 79]]
    if (type === 'curl' || type === 'hammer-curl') return end ? [[53, shoulderY, 39, 63], [59, shoulderY, 73, 63], [39, 63, 47, 48], [73, 63, 65, 48]] : [[53, shoulderY, 43, 78], [59, shoulderY, 69, 78]]
    if (type === 'squat') return [[52, shoulderY, 45, 62], [60, shoulderY, 67, 62]]
    if (type === 'split-squat' || type === 'rdl' || type === 'calf-raise') return [[52, shoulderY, 43, 76], [60, shoulderY, 69, 76]]
    return [[53, shoulderY, 43, 75], [59, shoulderY, 69, 75]]
  })()

  return (
    <g className={end ? 'pose-end' : 'pose-start'}>
      <circle cx="56" cy={headY} r="8" className="figure-head" />
      <line x1="56" y1={shoulderY} x2={isRdl && end ? 82 : 56} y2={hipY} {...strokeProps} />
      {arm.map((line, index) => <line key={index} x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} {...strokeProps} />)}
      {isSquat && end ? (
        <><line x1="56" y1={hipY} x2="36" y2="105" {...strokeProps} /><line x1="36" y1="105" x2="28" y2="126" {...strokeProps} /><line x1="56" y1={hipY} x2="77" y2="105" {...strokeProps} /><line x1="77" y1="105" x2="85" y2="126" {...strokeProps} /></>
      ) : isSplit ? (
        <><line x1="56" y1={hipY} x2={end ? 40 : 37} y2={end ? 103 : 96} {...strokeProps} /><line x1={end ? 40 : 37} y1={end ? 103 : 96} x2={end ? 34 : 24} y2="126" {...strokeProps} /><line x1="56" y1={hipY} x2="78" y2={end ? 100 : 93} {...strokeProps} /><line x1="78" y1={end ? 100 : 93} x2="94" y2="103" {...strokeProps} /><line x1="78" y1="108" x2="103" y2="108" className="bench-line" /></>
      ) : isRdl && end ? (
        <><line x1="82" y1={hipY} x2="76" y2="99" {...strokeProps} /><line x1="76" y1="99" x2="76" y2="127" {...strokeProps} /><line x1="82" y1={hipY} x2="90" y2="99" {...strokeProps} /><line x1="90" y1="99" x2="91" y2="127" {...strokeProps} /></>
      ) : (
        <><line x1="56" y1={hipY} x2="46" y2="126" {...strokeProps} /><line x1="56" y1={hipY} x2="66" y2="126" {...strokeProps} /></>
      )}
      {(type !== 'squat' || !end) && !['shoulder-press', 'lateral-raise', 'triceps', 'rear-delt'].includes(type) && <><circle cx={arm[arm.length - 1][2]} cy={arm[arm.length - 1][3]} r="5" className="dumbbell" /><circle cx={arm[0][2]} cy={arm[0][3]} r="5" className="dumbbell" /></>}
      {type === 'squat' && <rect x="48" y={shoulderY + 9} width="16" height="9" rx="4" className="dumbbell" />}
      {isCalf && end && <><line x1="39" y1="128" x2="53" y2="123" className="accent-line" /><line x1="59" y1="128" x2="73" y2="123" className="accent-line" /></>}
    </g>
  )
}

function BenchPose({ type, end }: { type: IllustrationType; end: boolean }) {
  const incline = type === 'incline-press'
  const shoulderX = incline ? 48 : 37
  const shoulderY = incline ? 72 : 79
  const hipX = incline ? 70 : 78
  const hipY = incline ? 99 : 82
  const handY = end ? 33 : 65
  return (
    <g>
      <line x1={incline ? 33 : 19} y1={incline ? 106 : 91} x2="88" y2={incline ? 106 : 91} className="bench-line" />
      {incline && <line x1="34" y1="104" x2="62" y2="64" className="bench-line" />}
      <circle cx={incline ? 42 : 26} cy={incline ? 58 : 75} r="8" className="figure-head" />
      <line x1={shoulderX} y1={shoulderY} x2={hipX} y2={hipY} {...strokeProps} />
      <line x1={shoulderX} y1={shoulderY} x2="42" y2={handY} {...strokeProps} />
      <line x1={shoulderX + 5} y1={shoulderY + 2} x2="70" y2={handY} {...strokeProps} />
      <circle cx="42" cy={handY} r="5" className="dumbbell" /><circle cx="70" cy={handY} r="5" className="dumbbell" />
      <line x1={hipX} y1={hipY} x2="87" y2="119" {...strokeProps} /><line x1={hipX} y1={hipY} x2="72" y2="123" {...strokeProps} />
    </g>
  )
}

function FloorPose({ type, end }: { type: IllustrationType; end: boolean }) {
  if (type === 'leg-raise') {
    return <g><line x1="18" y1="112" x2="99" y2="112" className="floor-line" /><circle cx="25" cy="95" r="8" className="figure-head" /><line x1="33" y1="99" x2="66" y2="105" {...strokeProps} /><line x1="66" y1="105" x2={end ? 75 : 102} y2={end ? 49 : 106} {...strokeProps} /><line x1="66" y1="105" x2={end ? 88 : 103} y2={end ? 54 : 111} {...strokeProps} /></g>
  }
  const high = type === 'pushup' && end
  const shoulderY = high ? 70 : 91
  const hipY = high ? 82 : 98
  return <g><line x1="12" y1="119" x2="105" y2="119" className="floor-line" /><circle cx="25" cy={shoulderY - 12} r="7" className="figure-head" /><line x1="33" y1={shoulderY} x2="70" y2={hipY} {...strokeProps} /><line x1="70" y1={hipY} x2="101" y2="113" {...strokeProps} /><line x1="35" y1={shoulderY} x2="30" y2="114" {...strokeProps} />{type === 'plank' && <line x1="30" y1="114" x2="47" y2="114" {...strokeProps} />}</g>
}

function RowPose({ end }: { end: boolean }) {
  return <g><line x1="16" y1="102" x2="91" y2="102" className="bench-line" /><circle cx="39" cy="40" r="8" className="figure-head" /><line x1="44" y1="49" x2="72" y2="72" {...strokeProps} /><line x1="72" y1="72" x2="79" y2="102" {...strokeProps} /><line x1="52" y1="56" x2="35" y2="101" {...strokeProps} /><line x1="59" y1="61" x2={end ? 78 : 66} y2={end ? 66 : 96} {...strokeProps} /><circle cx={end ? 78 : 66} cy={end ? 66 : 96} r="5" className="dumbbell" /><line x1="71" y1="73" x2="48" y2="125" {...strokeProps} /></g>
}

function ShoulderPose({ end }: { end: boolean }) {
  const handY = end ? 17 : 58
  return <g><line x1="38" y1="86" x2="74" y2="86" className="bench-line" /><line x1="40" y1="45" x2="40" y2="89" className="bench-line" /><circle cx="57" cy="29" r="8" className="figure-head" /><line x1="57" y1="43" x2="57" y2="84" {...strokeProps} /><line x1="53" y1="46" x2="40" y2={handY} {...strokeProps} /><line x1="61" y1="46" x2="74" y2={handY} {...strokeProps} /><circle cx="40" cy={handY} r="5" className="dumbbell" /><circle cx="74" cy={handY} r="5" className="dumbbell" /><line x1="57" y1="84" x2="43" y2="105" {...strokeProps} /><line x1="43" y1="105" x2="43" y2="127" {...strokeProps} /><line x1="57" y1="84" x2="73" y2="105" {...strokeProps} /><line x1="73" y1="105" x2="73" y2="127" {...strokeProps} /></g>
}

function RearDeltPose({ end }: { end: boolean }) {
  return <g><line x1="25" y1="108" x2="62" y2="58" className="bench-line" /><line x1="25" y1="108" x2="79" y2="108" className="bench-line" /><circle cx="45" cy="43" r="8" className="figure-head" /><line x1="53" y1="49" x2="76" y2="78" {...strokeProps} /><line x1="61" y1="58" x2={end ? 26 : 51} y2={end ? 70 : 90} {...strokeProps} /><line x1="63" y1="60" x2={end ? 99 : 72} y2={end ? 48 : 93} {...strokeProps} /><circle cx={end ? 26 : 51} cy={end ? 70 : 90} r="5" className="dumbbell" /><circle cx={end ? 99 : 72} cy={end ? 48 : 93} r="5" className="dumbbell" /><line x1="76" y1="78" x2="91" y2="125" {...strokeProps} /><line x1="76" y1="78" x2="65" y2="125" {...strokeProps} /></g>
}

function Pose({ type, end }: { type: IllustrationType; end: boolean }) {
  if (type === 'incline-press' || type === 'flat-press') return <BenchPose type={type} end={end} />
  if (type === 'pushup' || type === 'plank' || type === 'leg-raise') return <FloorPose type={type} end={end} />
  if (type === 'row') return <RowPose end={end} />
  if (type === 'shoulder-press') return <ShoulderPose end={end} />
  if (type === 'rear-delt') return <RearDeltPose end={end} />
  return <StandingPose type={type} end={end} />
}

interface Props { type: IllustrationType; exerciseName: string }

export function ExerciseIllustration({ type, exerciseName }: Props) {
  return (
    <figure className="exercise-illustration" aria-label={`Rörelsediagram för ${exerciseName}: startposition till slutposition`}>
      <svg viewBox="0 0 272 160" role="img" aria-hidden="true">
        <rect x="1" y="1" width="118" height="149" rx="15" className="pose-panel" />
        <rect x="153" y="1" width="118" height="149" rx="15" className="pose-panel end-panel" />
        <text x="14" y="20" className="pose-label">START</text>
        <text x="166" y="20" className="pose-label">SLUT</text>
        <g transform="translate(4 12)"><Pose type={type} end={false} /></g>
        <g transform="translate(156 12)"><Pose type={type} end /></g>
        <path d="M126 76 H145 M139 70 L145 76 L139 82" className="motion-arrow" />
      </svg>
      <figcaption>Kontrollerad rörelse · cirka 3 sekunder tillbaka</figcaption>
    </figure>
  )
}
