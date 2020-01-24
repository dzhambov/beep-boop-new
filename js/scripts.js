// User interface logic
$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val().split());
    var result = beepBoop(number);
    console.log(number);
    $("#result").text(result);
  });
});


// Business logic
var beepBoop = function (number)  {
  var arr = [];
  for (var i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      arr.push("Sorry, You got Busted!");
    } else if (i.toString().includes("2")) {
      arr.push("I say Boop!");
    } else if (i.toString().includes("1")) {
      arr.push("You say Beep!");
    } else {
      arr.push(i);
    }
  }
  return arr;
};