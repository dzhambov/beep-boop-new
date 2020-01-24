// User interface logic
$(document).ready(function() {
  $("#game").submit(function (event) {
    event.preventDefault();
    var userNumber = parseInt($("input#number").val());
    var result = beepBoop(userNumber);
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#result").text(result);
  });
});


// Business logic
var beepBoop = function(userNumber) {
  var arr = [];

  for (var i = 0; i <= userNumber; i++) {
    if (i.toString().includes("3")) {
      arr.push("I'm sorry Dave, I'm afraid I can't do that");
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