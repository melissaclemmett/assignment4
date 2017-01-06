//Implement the red light using jQuery. Don't forget to add the script tags.

// alert("Hello");

$("#stopButton").click(changeRed);
$("#slowButton").click(changeYellow);
$("#goButton").click(changeGreen);

function changeRed() {
  clearLights();
  $("#stopLight").addClass("red");
}

function changeYellow() {
  clearLights();
  $("#slowLight").addClass("yellow");
}

function changeGreen() {
  clearLights();
  $("#goLight").addClass("green");
}

function clearLights() {
  $("#stopLight, #slowLight, #goLight").attr("class", "bulb");
}
