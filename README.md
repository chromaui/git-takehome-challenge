# Chromatic Git Challenge

A stub for the Git Challenge built with Storybook and Vite in Typescript.

### Running

```
yarn install
yarn storybook
```

#### Running Tests

When running tests, you call these commands from the root.
`yarn test` - Runs all tests (frontend + backend + storybook)
`yarn test:frontend` - Runs only frontend tests
`yarn test:backend` - Runs only backend tests

## Appendix/Examples

### Single commit

A single commit is represented visually by a circle.

![single commit](./public/SingleCommit.png)

### Single Branch

A branch is represented by a line of commits separated by lines indicating ancestry, with the oldest commit on the left hand side.

![single branch](./public/SingleBranch.png)

### Two Branches

When there are more than one branch they should be laid out on top of each other so as all commits are visible:

![two branches](./public//TwoBranches.png)

### Merge Commit

When there’s a merge commit, the branches should join up together again:

![merge commit](./public/Merge.png)

### Single Feature Branch

An example of a single feature branch

![sub feature commit](./public/SubFeature.png)

### Multiple Features

An example of multiple feature branches

![multi feature commit](./public/MultipleFeatures.png)
