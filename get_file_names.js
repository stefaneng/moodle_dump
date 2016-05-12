var files = document.getElementsByClassName("activityinstance");
var results = [];

for (var i = 0; i < files.length; i++) {
  // Get the file names
  results.push(files[i].firstChild.lastChild.textContent);
}

copy(JSON.stringify(results));
