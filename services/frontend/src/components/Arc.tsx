import { locationToCommitCenter, STROKE_WIDTH } from '../constants';

export function Arc({
  fromLocation,
  toLocation,
  color = '#0f766e',
}: {
  fromLocation: [number, number];
  toLocation: [number, number];
  color?: string;
}) {
  const [x1, y1] = locationToCommitCenter(fromLocation);
  const [x2, y2] = locationToCommitCenter(toLocation);
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      style={{ stroke: color, strokeWidth: STROKE_WIDTH, zIndex: 0 }}
    />
  );
}
