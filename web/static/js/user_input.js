import { input_channel } from "./socket";

var user_input = {a: false, s: false, d: false, w: false};
var valid_keys = Object.keys(user_input);

function record_keypress(event) {
  if (valid_keys.includes(event.key)) {
    user_input[event.key] = true;
  }
}

function record_keyup(event) {
  if (valid_keys.includes(event.key)) {
    user_input[event.key] = false;
  }
}

function report_input() {
  input_channel.push("user_input", user_input)
  setTimeout(report_input, 15);
}

document.onkeypress = record_keypress;
document.onkeyup = record_keyup;
report_input();
