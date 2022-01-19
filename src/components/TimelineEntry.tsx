import { PropsWithChildren, useEffect } from 'react';
import { useCollapsibleTimeline } from '../features/context';

type Props = PropsWithChildren<{
  timestamp: number;
}>;

export function TimelineEntry({ timestamp, children }: Props) {
  const [, dispatch] = useCollapsibleTimeline();

  useEffect(() => {
    dispatch({ type: 'addEntry', entry: { timestamp } });
  }, [timestamp]);

  return <div>{children}</div>;
}
