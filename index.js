// Your code here
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arrays) {
  return arrays.map(createEmployeeRecord);
}

function createTimeInEvent(employee, dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  employee.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour), date });
  return employee;
}

function createTimeOutEvent(employee, dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  employee.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour), date });
  return employee;
}

function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find(e => e.date === date);
  const timeOut = employee.timeOutEvents.find(e => e.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(employee, date) {
  return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

function allWagesFor(employee) {
  return employee.timeInEvents.reduce((total, event) => total + wagesEarnedOnDate(employee, event.date), 0);
}

function calculatePayroll(employees) {
  return employees.reduce((total, emp) => total + allWagesFor(emp), 0);
}
