
var saveButton
var timeblocksContainer = $("#timeblocksContainer")
var dateHeader = $("#dateHeader")
var currentDay = moment().format('MMMM Do YYYY');
var inputElement = $("#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5")
// set current day using moment.js, display to top of the page
function loadTime() {
  dateHeader.text(currentDay)
  // createInputGroups()
}

// create timeblock input groups
// function createInputGroups() {
  
//   for (let i = 9; i <= 17; i++) {
//     var inputGroup = document.createElement('div')
//     inputGroup.innerHTML = (
//       `<div class="input-group">
//       <div class="input-group-prepend">
//         <span class="input-group-text" onload="handleInputLoad()">${i}</span>
//       </div>
//       <input type="text" class="form-control">
//       <div class="input-group-append">
//         <button onlick = "handleSubmit()" type = "button">save</button>
//       </div>
//     </div>`
//     )
//     $('#timeBlocksContainer').append(inputGroup)
//   }
// }

// // convert i to 12 hour time
// function timeConvert () {

// }

// // set color of time block based on past, present, future
// function handleInputLoad() {

// }

// save input value into local Storage with key = time[i] and value = value
function handleSubmit() {
    
}

// if Local Storage exists for time, then set value to value from local storage
function persistInput () {
  var key = "input-" + input.id;

  var storedValue = localStorage.getItem(key);

  if (storedValue)
      input.value = storedValue;
      
  input.addEventListener('input')
  {
      localStorage.setItem(key, input.value);
  };
}

