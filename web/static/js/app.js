// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

var user_input = {a: false, s: false, d: false, w: false};
var valid_keys = Object.keys(user_input);
var loop = setTimeout

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
  loop(log_input, 15);
}

document.onkeypress = record_keypress
document.onkeyup = record_keyup
report_input();
