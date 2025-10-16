type CommitHash = string;
export type Commit = {
  hash: CommitHash;
  parents: CommitHash[];
};
export type CommitWithLocation = Commit & {
  row: number;
  column: number;
};

// Attach a row+column to each commit in a sensible way so the history can be understood.
// For example, if we want the commits to render like so:
// A-B-C
//  ∟D-E
// the commit matrix ([row, column]) should be: A: [0,0], B: [0,1], C: [0,2], D: [1,1], E: [1,2]
export function addLocationsToCommits(commits: Commit[]): CommitWithLocation[] {
  return commits.map((commit, index) => ({
    ...commit,
    row: 0,
    column: index,
  }));
}
