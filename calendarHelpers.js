function listCals() {
  var calendars = CalendarApp.getAllOwnedCalendars();
  data = []
  for (var i = 0; i < calendars.length; i++) {
    data.push([ calendars[i].getId(), calendars[i].getName()])
  }
  var destinationRange = SpreadsheetApp.getActiveSheet().getRange(1, 1, data.length, data[0].length);
  destinationRange.setValues(data);
};

function delCals() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange();
  var numRows = rows.getNumRows();
  var values = rows.getValues();

  for (var i = 0; i <= numRows - 1; i++) {
    var row = values[i];
    var calendar = CalendarApp.getCalendarById(row[0]);
    calendar.deleteCalendar();
  }
};

function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "List Owned Calendars",
    functionName : "listCals"
  },{
    name : "Delete Listed Calendars",
    functionName : "delCals"
  },];
  sheet.addMenu("Calendar", entries);
};