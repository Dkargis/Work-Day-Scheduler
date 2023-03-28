var currentDay = $('#currentDay');
var saveBtn = $('.saveBtn');
var timeBlockEl = $('time-block');
var textAreaEl = $('description');
// var hourEL = $('#hour');
var hour9El = $('#hour-9');
var hour10EL = $( '#hour-10');
var hour11El = $( '#hour-11');
var hour12EL = $ ('#hour-12');
var hour13EL = $( '#hour-13');
var hour14El = $ ('#hour-14');
var hour15El = $( '#hour-15');
var hour16EL = $( '#hour-16');
var hour17EL = $('#hour-17');
var hour18EL = $( '#hour-18');
var hour19EL = $( '#hour-19');
var hour20EL = $( '#hour-20');
var pastEl = $( 'past');
var presentEl = $( 'present');
var futureEl = $( 'future');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
$('#1a').text(today.format('MMM D, YYYY'));


var span = document.getElementById('2a');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

for (var i = 9; i <= 17; i++){
$("#hour-" + i).children('.description').val(function() {
  return localStorage.getItem('hour-' + i);
});
};
// function displayInfo () {
//   for (var i = 9; i <= 17; i++) {
//   $('#hour-' + i).val(localStorage.getItem('hour-'+ i));
//   var test = localStorage.getItem('hour-'+ i);
//   console.log(test);

//   }
// };

// displayInfo();
// I had a fellow student help me with this funtion, I was not able to figure it out on my own.
$(function timeOfDay () {
  var currentTime = dayjs().hour();
  console.log(currentTime);
  for (var i = 9; i <= 21; i++) {
    if (currentTime > i) {
      $('#hour-' + i).addClass('past');
    } else if (currentTime < i) {
      $('#hour-' + i).addClass('future');
    } else {
      $('#hour-' + i).addClass('present');
    } 
  }
  console.log(timeOfDay)
});

for (var i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener ('click', enteredText);
  console.log(enteredText)
  };

  function enteredText () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, text);
    };



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
