import moment from 'moment'
import 'moment-timezone';

export default function generateTimeString(timestamp: number, timezone: string){
const now = moment().tz(timezone);

const date = moment(timestamp).tz(timezone);

let formattedTime;
const TODAY = now.clone().startOf('day');
const YESTERDAY = now.clone().subtract(1, 'days').startOf('day');

function isToday(momentDate: moment.Moment) {
    return momentDate.isSame(TODAY, 'd');
}
function isYesterday(momentDate: moment.Moment) {
    return momentDate.isSame(YESTERDAY, 'd');
}

if (isToday(date)) {
    return date.format('Today HH:mm')
} else if (isYesterday(date)) {
    return date.format('Yesterday HH:mm')
}else{
    return date.format('YYYY/MM/DD HH:mm');
}
}