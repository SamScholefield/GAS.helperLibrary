function isValidDate(d) {
  if ( Object.prototype.toString.call(d) !== "[object Date]" )
    return false;
  return !isNaN(d.getTime());
}

function shortDate(d){  
  var dayArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var curr_day = d.getDay();
  var curr_date = d.getDate();
    if(curr_date < 10){curr_date = "0" + curr_date;}
  var curr_month = d.getMonth() + 1;
    if(curr_month < 10){curr_month = "0" + curr_month;}
  var curr_year = d.getFullYear();  
  var shortDate = dayArray[curr_day] + " " + curr_date + "-" + curr_month + "-" + curr_year;  
  return (shortDate);
}
