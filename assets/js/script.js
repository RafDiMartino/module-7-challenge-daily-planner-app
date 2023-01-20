const currentDay = $("#currentDay");

// handle displaying the time
function displayTime() {
    let today = moment().format('dddd, MMMM Do');
    currentDay.text(today);
  }

displayTime()