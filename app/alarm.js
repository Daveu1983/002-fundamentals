// eslint-disable-next-line no-unused-vars
const alarmUsers = [
  { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }
];

function getAlarmUserFirstName(peopleThatHaveUsedAlarm) {
  
  const blah = []
  
  peopleThatHaveUsedAlarm.map(function(nam){
    
    blah.push(nam["name"]);
  
    
  });

  return blah;
}

function getWakeUpTimes(peopleThatHaveUsedAlarm){

  const blah = []

  peopleThatHaveUsedAlarm.map(function(nam){
    let time;
    let amOrPm;

    if(nam.wakeUpTime === 12){
      time = nam.wakeUptime;
      amOrPm = "pm";
    }else if (nam.wakeUpTime < 12){
      time = nam.wakeUpTime 
      amOrPm = "am"
    }else{
      time = nam.wakeUpTime - 12
      amOrPm = "pm"
    }

    blah.push(nam["name"] +  " wakes up at " + (time +1) + amOrPm)

  });
  return blah;
}

function getEarlyRisers(alarmUsers, ceoTimeChosen) {

  alarmUsers =  alarmUsers.filter(function(name){
  if (name.wakeUpTime < ceoTimeChosen){
    return true;
    }else {
      return false
    }
  });
  return alarmUsers
}

function wakeup(currentTime) {
    // currentTime will be a Javascript Date object
  // https://www.w3schools.com/jsref/jsref_obj_date.asp
  const currentHour = currentTime.getHours();

  switch (currentHour){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return "Ugggggh its too early - I'm not waking up yet";
    case 12:
    case 13:
    case 14:
      return  "Yessssss its lunch time!!!";
    default:
      return "Get up!! You're wasting the day";   
  }
}

function snooze() {
  let snoozeAttempts = 0;

  while (snoozeAttempts < 20) {
    snoozeAttempts++;
  }

  return snoozeAttempts;
}



module.exports = {
  wakeup,
  snooze,
  getAlarmUserFirstName,
  getWakeUpTimes,
  getEarlyRisers
};
