export const STROKE_WIDTH = 10;
export const COMMIT_RADIUS = 30;
export const COMMIT_SPACING = 120;
export const OFFSET = STROKE_WIDTH + COMMIT_RADIUS;

export function locationToCommitCenter([x, y]: [number, number]) {
  return [x * COMMIT_SPACING + OFFSET, y * COMMIT_SPACING + OFFSET];
}
