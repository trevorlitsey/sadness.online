// borrowed/stolen from https://codepen.io/13twelve/pen/xLoiH

// target to give background to
var $div = document.querySelector('scroll-container');
// rgb vals of the gradients
var gradients = [
  { start: [30, 30, 30], stop: [40, 40, 40] },
  { start: [10, 10, 10], stop: [60, 60, 60] },
  { start: [30, 30, 30], stop: [40, 40, 40] },
  { start: [60, 60, 60], stop: [20, 20, 20] }
];
// how long for each transition
var transition_time = 4;

// internal type vars
let stop = false;
var currentIndex = 0; // where we are in the gradients array
var nextIndex = 1; // what index of the gradients array is next
var steps_count = 0; // steps counter
var steps_total = Math.round(transition_time * 60); // total amount of steps
var rgb_steps = {
  start: [0, 0, 0],
  stop: [0, 0, 0]
}; // how much to alter each rgb value
var rgb_values = {
  start: [0, 0, 0],
  stop: [0, 0, 0]
}; // the current rgb values, gets altered by rgb steps on each interval
var prefixes = ["-webkit-", "-moz-", "-o-", "-ms-", ""]; // for looping through adding styles
var div_style = $div.style; // short cut to actually adding styles
var color1, color2;

// sets next current and next index of gradients array
function set_next(num) {
  return (num + 1 < gradients.length) ? num + 1 : 0;
}

// work out how big each rgb step is
function calc_step_size(a, b) {
  return (a - b) / steps_total;
}

// populate the rgb_values and rgb_steps objects
function calc_steps() {
  for (var key in rgb_values) {
    if (rgb_values.hasOwnProperty(key)) {
      for (var i = 0; i < 3; i++) {
        rgb_values[key][i] = gradients[currentIndex][key][i];
        rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i], rgb_values[key][i]);
      }
    }
  }
}

// update current rgb vals, update DOM element with new CSS background
function updateGradient() {
  // update the current rgb vals
  for (var key in rgb_values) {
    if (rgb_values.hasOwnProperty(key)) {
      for (var i = 0; i < 3; i++) {
        rgb_values[key][i] += rgb_steps[key][i];
      }
    }
  }

  // generate CSS rgb values
  var t_color1 = "rgb(" + (rgb_values.start[0] | 0) + "," + (rgb_values.start[1] | 0) + "," + (rgb_values.start[2] | 0) + ")";
  var t_color2 = "rgb(" + (rgb_values.stop[0] | 0) + "," + (rgb_values.stop[1] | 0) + "," + (rgb_values.stop[2] | 0) + ")";

  // has anything changed on this interation
  if (t_color1 != color1 || t_color2 != color2) {

    // update cols strings
    color1 = t_color1;
    color2 = t_color2;

    // update DOM element style attribute
    div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from(" + color1 + "), to(" + color2 + "))";
    for (var i = 0; i < 4; i++) {
      div_style.backgroundImage = prefixes[i] + "linear-gradient(45deg, " + color1 + ", " + color2 + ")";
    }
  }

  // we did another step
  steps_count++;
  // did we do too many steps?
  if (steps_count > steps_total) {
    // reset steps count
    steps_count = 0;
    // set new indexs
    currentIndex = set_next(currentIndex);
    nextIndex = set_next(nextIndex);
    if (stop === true) {
      gradients[nextIndex] = { start: [0, 0, 0], stop: [0, 0, 0] };
    }
    // calc steps
    calc_steps();
  }

  if (div_style.backgroundImage.indexOf("gradient") != -1) {
    window.requestAnimationFrame(updateGradient)
  }
}

// initial step calc
calc_steps();

// go go go!
window.requestAnimationFrame(updateGradient);



const yesBttn = document.querySelector('.bttn--yes');

function colorIsBlack(grad) {
  const black = [0, 0, 0];
  if (grad.start[0] !== 0 || grad.start[1] !== 0 || grad.start[2] !== 0
    || grad.stop[0] !== 0 || grad.stop[1] !== 0 || grad.stop[2] !== 0) {
    return false;
  } else {
    return true;
  }
}

yesBttn.addEventListener('click', function () {
  stop = true;
  document.querySelector('#yes').style.opacity = '0';
})

