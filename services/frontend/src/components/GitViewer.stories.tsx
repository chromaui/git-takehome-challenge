import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GitViewer } from './GitViewer';

const meta: Meta<typeof GitViewer> = {
  title: 'GitViewer',
  component: GitViewer,
};

export default meta;
type Story = StoryObj<typeof GitViewer>;

export const SingleCommit: Story = {
  args: {
    commits: [
      {
        hash: 'A',
        parents: [],
      },
    ],
  },

  parameters: {
    design: {
      type: 'image',
      url: '/SingleCommit.png',
    },
  },
};

export const SingleBranch: Story = {
  args: {
    commits: [
      {
        hash: 'A',
        parents: [],
      },
      {
        hash: 'B',
        parents: ['A'],
      },
      {
        hash: 'C',
        parents: ['B'],
      },
      {
        hash: 'D',
        parents: ['C'],
      },
    ],
  },

  parameters: {
    design: {
      type: 'image',
      url: '/SingleBranch.png',
    },
  },
};

export const TwoBranches: Story = {
  args: {
    commits: [
      {
        hash: 'A',
        parents: [],
      },
      {
        hash: 'B',
        parents: ['A'],
      },
      {
        hash: 'C',
        parents: ['B'],
      },
      {
        hash: 'E',
        parents: ['A'],
      },
      {
        hash: 'F',
        parents: ['E'],
      },
    ],
  },

  parameters: {
    design: {
      type: 'image',
      url: '/TwoBranches.png',
    },
  },
};

const twoBranchesCommits = TwoBranches.args?.commits ?? [];

export const Merge: Story = {
  args: {
    commits: [
      ...twoBranchesCommits,
      {
        hash: 'G',
        parents: ['C', 'F'],
      },
    ],
  },

  parameters: {
    design: {
      type: 'image',
      url: '/Merge.png',
    },
  },
};

export const ThreeBranches: Story = {
  args: {
    commits: [
      ...twoBranchesCommits,
      {
        hash: 'G',
        parents: ['A'],
      },
      {
        hash: 'H',
        parents: ['G'],
      },
    ],
  },

  parameters: {
    design: {
      type: 'image',
      url: '/ThreeBranches.png',
    },
  },
};

export const SubFeature: Story = {
  args: {
    commits: [
      ...twoBranchesCommits,
      {
        hash: 'M',
        parents: ['F'],
      },
      {
        hash: 'H',
        parents: ['E'],
      },
      {
        hash: 'I',
        parents: ['H'],
      },
      {
        hash: 'G',
        parents: ['M', 'I'],
      },
      {
        hash: 'L',
        parents: ['C', 'G'],
      },
    ],
  },

  parameters: {
    design: {
      type: 'image',
      url: '/SubFeature.png',
    },
  },
};

export const MultipleFeatures: Story = {
  args: {
    commits: [
      ...twoBranchesCommits,
      {
        hash: 'H',
        parents: ['B'],
      },
      {
        hash: 'I',
        parents: ['H'],
      },
      {
        hash: 'G',
        parents: ['C', 'I'],
      },
      {
        hash: 'J',
        parents: ['F'],
      },
      {
        hash: 'K',
        parents: ['J'],
      },

      {
        hash: 'L',
        parents: ['G', 'K'],
      },
    ],
  },

  parameters: {
    design: {
      type: 'image',
      url: '/MultipleFeatures.png',
    },
  },
};
