import moment from 'moment';

export default function(params){

  const start_hour = params.start_hour;
  const end_hour = params.end_hour;


  function _displayHours(){
    let hours = [];
    var i = start_hour;
    while (i < end_hour) {
      hours = [...hours, moment().utc().startOf('day').hour(i).minute(0)];
      i++;
    }
    return hours;
  };

  const displayHours = function(){
    return _displayHours();
  };


  return {
    displayHours: displayHours
  }
}
