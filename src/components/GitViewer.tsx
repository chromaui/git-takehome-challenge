import { Commit as CommitComponent } from "./Commit";
import { CommitParentArcs } from "./CommitParentArcs";
import { COMMIT_SPACING, OFFSET } from "../constants";
import { type Commit, addLocationsToCommits } from "../addLocationsToCommits";

export function GitViewer({ commits }: { commits: Commit[] }) {
  const commitsWithLocations = addLocationsToCommits(commits.slice());

  const size = [
    Math.max(...commitsWithLocations.map((c) => c.column)),
    Math.max(...commitsWithLocations.map((c) => c.row)),
  ];

  function location({
    column,
    row,
  }: {
    column: number;
    row: number;
  }): [number, number] {
    return [column, row];
  }

  return (
    <svg
      width={size[0] * COMMIT_SPACING + 2 * OFFSET}
      height={size[1] * COMMIT_SPACING + 2 * OFFSET}
    >
      {/* Draw all commits first, then the arcs joining them to their parents
        SVG requires us to do it this way to ensure the commits are placed on top
        If you can think of a better way to achieve this let us know! */}

      {commitsWithLocations.map((commit) => (
        <CommitParentArcs
          key={commit.hash}
          location={location(commit)}
          parentLocations={commit.parents.map((parentHash) => {
            const parentCommit = commitsWithLocations.find(
              (c) => c.hash === parentHash
            );
            return parentCommit
              ? location(parentCommit)
              : location({ column: 0, row: 0 });
          })}
        />
      ))}

      {commitsWithLocations.map((commit) => (
        <CommitComponent
          key={commit.hash}
          commit={commit}
          location={location(commit)}
        />
      ))}
    </svg>
  );
}
