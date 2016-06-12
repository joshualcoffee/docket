import React from 'react';
import Timeline from '../components/timeline';
import TimelineUtil from 'utils/timeline';
export default class DailyTimeline extends React.Component {
  render() {
    let timeline_util = TimelineUtil({start_hour: 12, end_hour: 18});
    let displayHours = timeline_util.displayHours();
    return(
      <div>
        <Timeline resources={[1,2,3]}hours={displayHours} />
      </div>
    )
  }
};
