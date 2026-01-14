import {
  STROKE_WIDTH,
  COMMIT_RADIUS,
  locationToCommitCenter,
} from "../constants";

import { CommitWithLocation } from "../addLocationsToCommits";
export function Commit({
  commit,
  location,
}: {
  commit: CommitWithLocation;
  location: [number, number];
}) {
  const [cx, cy] = locationToCommitCenter(location);
  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={COMMIT_RADIUS}
        stroke="#0f766e"
        strokeWidth={STROKE_WIDTH}
        fill="white"
        style={{ zIndex: 1 }}
      />
      <circle
        cx={cx}
        cy={cy}
        r={STROKE_WIDTH + COMMIT_RADIUS}
        stroke="white"
        strokeWidth={STROKE_WIDTH}
        fill="transparent"
        style={{ zIndex: 1 }}
      />
      <text textAnchor="middle" x={cx} y={cy} stroke="#0f766e" dy=".3em">
        {commit.hash}
      </text>
    </>
  );
}
