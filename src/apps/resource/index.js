import Resource from './containers/daily_timeline';
import React from 'react';
import {render} from 'react-dom';

export default function(){

  render(
    <Resource />,
    document.getElementById('resource_calendar')
  );
}
