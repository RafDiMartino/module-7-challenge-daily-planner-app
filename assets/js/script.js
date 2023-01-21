const currentDay = $("#currentDay");
const container = $(".container");
let hours = { start: 9, end: 18 };

// Function that handle displaying the time
function displayTime() {
    let today = moment().format('dddd, MMMM Do');
    currentDay.text(today);
}

displayTime()

// Logic to display the elements on the screen
for (let i = hours.start; i <= hours.end; i++) {
  
  // creating the elent and appending them to the div container
  let textAreaWrapper = $("<div>")
  container.append(textAreaWrapper)
  
  let btnSave = $("<button>")
  btnSave.addClass("saveBtn")
  btnSave.attr("data-hour", i)
  btnSave.html("<i class='fa-solid fa-floppy-disk'></i>")

  let label = $("<label>")
  let textarea = $("<textarea>")
  textarea.attr("id", i)
  
  let displayHour = moment(`2023-01-01T${i < 10 ? "0" + i : i}:00:00`).format("ha")
  textAreaWrapper.append(label).text(displayHour)
  textAreaWrapper.append(textarea)
  textAreaWrapper.append(btnSave)
  let currentTime = moment().format("H")
  
  // Conditional for color coding present, past and future based on the current time
  if (i < currentTime) {
    textarea.addClass("past")
  } else if (i <= currentTime) {
    textarea.addClass("present")
  } else {
    textarea.addClass("future")
  }
}
