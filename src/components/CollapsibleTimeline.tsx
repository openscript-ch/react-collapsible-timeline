import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export function CollapsibleTimeline({ children }: Props) {
  return <div>{children}</div>;
}
