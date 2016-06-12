import React from 'react';
import interact from 'interact.js';
import {findDOMNode} from 'react-dom';
import TimelineHeader from './timeline_header';
import Resource from './resource';
export default class Timeline extends React.Component {
  render() {
    const renderResources = () => {
      return this.props.resources.map((resource) => {
        return <Resource key={resource} hours={this.props.hours} resource={resource} />
      });
    };

    return(
      <div>
        <TimelineHeader hours={this.props.hours}/>
        {renderResources()}
      </div>
    )
  }
};
