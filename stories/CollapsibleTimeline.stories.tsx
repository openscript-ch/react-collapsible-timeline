import { CollapsibleTimeline, TimelineEntry } from '../src';

export default {
  title: 'Collapsible Timeline',
  component: CollapsibleTimeline,
};

export function Basic() {
  return (
    <CollapsibleTimeline>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24}>One day ago</TimelineEntry>
    </CollapsibleTimeline>
  );
}
