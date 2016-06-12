import moment from 'moment';

export function monthStartDate(month, year) {
  let date = moment(`${month} ${year}`).startOf('month');
  return weekStartDate(date);
};

export function monthEndDate(month, year) {
  let date = moment(`${month} ${year}`).endOf('month');
  return weekEndDate(date);
};

export function weekStartDate(date) {
  return date.startOf('week');
};

export function weekEndDate(date) {
  return date.endOf('week');
};
