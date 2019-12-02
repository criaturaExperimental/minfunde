function addLeftZero(number) {
  if(number < 60){
    return number < 10 ? `0${number}` : number;
  }
  return 0;
}

export function timeFormatter(total_secs) {
  const num = total_secs;
  const hours = num / 3600;
  const restHours = Math.floor(hours);
  const minutes = (hours - restHours) * 60;
  const restMinutes = Math.floor(minutes);
  const seconds = (minutes - restMinutes) * 60;
  const restSeconds = Math.round(seconds);
  return `${addLeftZero(restHours)}:${addLeftZero(restMinutes)}:${addLeftZero(restSeconds)}`;
}