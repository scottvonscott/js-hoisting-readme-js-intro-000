

function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
  } return function thisIsCrazy();
}

function sayMyName() {
  var name = "Cricky";
  function sayMy() {
   var name = "Kristin";
    console.log(name);
  } return function sayMy();
}
