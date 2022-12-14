var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");
var monthHeader = document.getElementById("monthHeader");
var yearHeader = document.getElementById("yearHeader");
var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");
var datePicked = document.getElementById("date-picked");
var months = "";
var days = "";
var monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];




months = monthsArr;
days = daysArr;

var tableHeaderMonth = document.getElementById("thead-month");
var dataHead = "<tr>";
var startDay = "";

for (dhead in days) {
  days[dhead] === "Sun" ? startDay = "red-text" : startDay = "";
  dataHead += "<th data-days='" + days[dhead] + "' class='" + startDay + "'>" + days[dhead] + "</th>";
}

dataHead += "</tr>";
tableHeaderMonth.innerHTML = dataHead;
showCalendar(currentMonth, currentYear);  

nextBtn.addEventListener("click", next, false);
previousBtn.addEventListener("click", previous, false);

function yearRange(start, end) {
  var years = "";

  for (var year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }

  return years;
}

var createYear = yearRange(1970, 2050);
selectYear.innerHTML = createYear;

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  var firstDay = new Date(year, month).getDay();
  var monthString = monthsArr[month];

  table = document.getElementById("calendar-body");
  table.innerHTML = ""; 
  monthHeader.innerHTML = monthString.substring(0, 3);
  yearHeader.innerHTML = year;
  selectYear.value = year;
  selectMonth.value = month;

  var date = 1;

  for (var i = 0; i < 6; i++ ) {
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month-name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span>" + date + "</span>";
        cell.onclick = function(event) {
          var dates = document.querySelectorAll(".date-picker");
          var currentTarget = event.currentTarget;
          var date = currentTarget.dataset.date;
          var month = currentTarget.dataset.month - 1;
          var year = currentTarget.dataset.year;

          var a = new Date((month +1) + '/' + date + '/' + year);
          var b = new Date (today.toLocaleDateString('en-US'))
          
          // const launchDate = new Date('July 1, 1999, 12:00:00');
          // const futureDate = new Date();
          // futureDate.setTime(launchDate.getTime());

          // console.log(futureDate);
          // expected output: Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)

          // const fiveMinutesInMillis = 5 * 60 * 1000;
          // futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

          // console.log(futureDate);

          for (var i = 0; i < dates.length; i++) {
            dates[i].classList.remove("selected");
          }

          currentTarget.classList.add("selected");
          // Date  <p>
          month = month + 1;
          if(month < 10){
            month = "0" + month;
          }
          if(date < 10){
            date = "0" + date;
          }

          if (a < b){
            datePicked.innerHTML = 'choose another<br>date'
            datePicked.classList.add('err_date')
          } else{
            datePicked.innerHTML = month + "." + date + "." + year;
            datePicked.classList.remove('err_date')
          }
        }
        
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          cell.className = "date-picker selected";
        }

        row.appendChild(cell);
        date++;
      }
    }

    table.appendChild(row);
  }
}

function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}
