import { GitViewer } from '../src/components/GitViewer';

export default function Page() {
  return (
    <GitViewer
      commits={[
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
      ]}
    />
  );
}
