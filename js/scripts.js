$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var result =[];
    var userNumbers = $("input#number").val().split(""); 
    for(i = 0; i <=userNumbers.length; i++) {
      console.log(userNumbers);

    }
  });
});