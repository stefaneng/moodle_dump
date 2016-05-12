// Paste this into moodle console

// Get all the files
var files = document.getElementsByClassName("activityinstance");
var results = [];

for (var i = 0; i < files.length; i++) {
  // Get the <a> tag and append redirect true to href
  results.push(files[i].firstChild.href + "&redirect=1");
}

copy(JSON.stringify(results));

// Now the string array of the urls is copied to clipboard
