import React from 'react';
import moment from 'moment';
import Event from './event';
import _ from 'lodash';
export default class Resource extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount(){
    let events = [
      {
        start_time: moment().startOf('day').hour(13).minute(0),
        end_time: moment().startOf('day').hour(16).minute(0)
      }
    ];
    this.setState({events:events})
  }

  render(){
    const intervals = () => {
      let interval_map = [];
      let interval_time = null;
      let hours = _.clone(this.props.hours);
      hours.forEach((hour) => {
        let i = 0;
        while (i < 3) {
          var hour = hour.clone();
          var interval_key = this.props.resource+"_"+hour.format('HH_mm');
          hour.add(15, 'minutes');
          interval_map = [...interval_map, <div data-time={interval_key} key={interval_key} className='interval'></div>];
          i++;
        };
      });
      return interval_map;
    };

    return(
      <div className="timeline-resource">
        <div className="intervals">{intervals()}</div>
        {this.state.events.map((event) => <Event resource={this.props.resource} event={event} />)}
      </div>
    )
  }
}
