const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});

test('lazy bones', () => {
  let timeNow = new Date();
  timeNow.setHours(15);
  expect(alarm.wakeup(timeNow)).toBe("Get up!! You're wasting the day");
});

test('early lunch', () => {
  let timeNow = new Date();
  timeNow.setHours(12);
  expect(alarm.wakeup(timeNow)).toBe("Yessssss its lunch time!!!");
});

test('late lunch', () => {
  let timeNow = new Date();
  timeNow.setHours(14);
  expect(alarm.wakeup(timeNow)).toBe("Yessssss its lunch time!!!");
});

test('people who have used alarm', () => {
  const peopleThatHaveUsedAlarm = [
    { name: "James", wakeUpTime: 7 },
    { name: "Susan", wakeUpTime: 13 },
    { name: "Geoff", wakeUpTime: 14 },
    { name: "Lisa", wakeUpTime: 6 }
  ];
  const expectedPeople = ["James", "Susan", "Geoff", "Lisa"];
  expect(alarm.getAlarmUserFirstName(peopleThatHaveUsedAlarm)).toEqual(expectedPeople)
});

test('add an hr to wake up times and return array of strings of names and wake up time', () => {
  const peopleThatHaveUsedAlarm = [
    { name: "James", wakeUpTime: 7 },
    { name: "Susan", wakeUpTime: 13 },
    { name: "Geoff", wakeUpTime: 14 },
    { name: "Lisa", wakeUpTime: 6 }
  ];
  const expectedWakeUpTimes = [
    "James wakes up at 8am",
    "Susan wakes up at 2pm",
    "Geoff wakes up at 3pm",
    "Lisa wakes up at 7am"];
  expect(alarm.getWakeUpTimes(peopleThatHaveUsedAlarm)).toEqual(expectedWakeUpTimes)
});  

test('people for pay rises', () => {
  const peopleThatHaveUsedAlarm = [
    { name: "James", wakeUpTime: 7 },
    { name: "Susan", wakeUpTime: 13 },
    { name: "Geoff", wakeUpTime: 14 },
    { name: "Lisa", wakeUpTime: 6 }
  ];
  const expectedPeople = [
    { name: "James", wakeUpTime: 7 },
    { name: "Lisa", wakeUpTime: 6 }
];
  expect(alarm.getEarlyRisers(peopleThatHaveUsedAlarm)).toEqual(expectedPeople)
});  
  
test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(20);
});
