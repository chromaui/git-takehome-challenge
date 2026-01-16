// Draw the arcs from a laid out commit to its parents
import { Arc } from './Arc';

export function CommitParentArcs({
  location,
  parentLocations,
}: {
  location: [number, number];
  parentLocations: [number, number][];
}) {
  return (
    <>
      {parentLocations.map((parentLocation: [number, number]) => (
        <Arc
          key={parentLocation.join('-')}
          color="#0f766e"
          fromLocation={location}
          toLocation={parentLocation}
        />
      ))}
    </>
  );
}
