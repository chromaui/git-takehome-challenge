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
// NOTE: the sample implementation just puts them in a straight line
// your task is to come up with an algorithm to produce the real solution.
export function addLocationsToCommits(commits: Commit[]): CommitWithLocation[] {
  return commits.map((commit, index) => ({
    ...commit,
    row: 0,
    column: index,
  }));
}
