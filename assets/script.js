
var saveButton
var timeblocks = $("#timeblocksContainer")
var dateHeader = $("#dateHeader")
var currentDay = moment().format('MMMM Do YYYY');

// event listeners
// save button on each time slot


// set current day using moment.js, display to top of the page
function loadTime() {
  dateHeader.text(currentDay)
}


// set color of time block based on past, present, future
function timeBlocksStatus () {

}

// save entered tasks into local Storage
function taskSave () {

}


