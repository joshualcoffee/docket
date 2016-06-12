import React from 'react';
export default class TimelineHeader extends React.Component {
  render() {

    return(
      <div className="timeline-header">
        {this.props.hours.map((hour) => <div key={hour} className="item">{hour.format('h a')}</div>)}
      </div>
    )
  }
};
