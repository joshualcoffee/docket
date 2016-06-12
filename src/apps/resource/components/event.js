import React from 'react';
import {resourcePosition} from 'utils/event';
import {position} from 'utils/event';


export default class Resource extends React.Component {

  componentDidMount(){
    this.position = position(this.refs.event);
    this.position.bindInteract();
  }

  componentWillUnmount(){
    this.position.destroy();
  }

  render(){
    let styles = resourcePosition(this.props.resource, this.props.event);
    return(
      <span ref='event' className='event' style={styles}>
        event
      </span>
    )
  }
}
