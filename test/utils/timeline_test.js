import {assert} from 'chai';
import Timeline from 'utils/timeline';
import moment from 'moment';
describe("timeLineHeader", () => {

  let timeline = Timeline({start_hour: 12, end_hour: 18});
  let displayHours = timeline.displayHours();

  it('it should return moment objects for selected hours', () => {
    assert.equal(displayHours.length, 6);
  });

  it('should return moment objects for each display hour', () => {
    let start_hour = displayHours[0].format('YYYY DD MM hh:mm');
    let end_hour = displayHours[5].format('YYYY DD MM hh:mm');
    let start_hour_should_be = moment().startOf('day').hour(12).minute(0).format('YYYY DD MM hh:mm');
    let end_hour_should_be = moment().startOf('day').hour(17).minute(0).format('YYYY DD MM hh:mm');
    assert.equal(start_hour_should_be, start_hour);
    assert.equal(end_hour_should_be, end_hour);
  });

});
