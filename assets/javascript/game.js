var computerChoice = Random=Math.floor((Math.random() * 250) + 100);
console.log(computerChoice);
$('#randomNumber').text(computerChoice);
var blueGem  =  Random=Math.floor((Math.random() * 20) + 2);
console.log(blueGem);
var redGem = Random=Math.floor((Math.random() * 30) + 10);
console.log(redGem);
var greenGem = Random=Math.floor((Math.random() * 15) + 5);
console.log(greenGem);
var yellowGem = Random=Math.floor((Math.random() * 40) + 3);
var userNumber = 0;
$('#userNumber').text(userNumber);
console.log(userNumber);
var wins= 0;
var losses= 0;
console.log(wins)

window.onload = function()  {
    
    




$(document).ready(function() {
 
    $('#randomNumber').text(computerChoice);  
$("#blueGemBtn").on("click", function() {
    blueGem + userNumber;
    console.log(blueGem + userNumber);
    $("#userNumber").text(blueGem + userNumber);
    userNumber = userNumber + blueGem;
    $("#userNumber").text(userNumber);
    console.log("new user score=" + userNumber)
  });
  $("#redGemBtn").on("click", function() {
    redGem + userNumber;
    console.log(redGem + userNumber);
    $("#userNumber").append(redGem + userNumber);
    userNumber = userNumber + redGem;
    console.log("new user score=" + userNumber);
    $("#userNumber").text(userNumber);
    
  });
  $("#yellowGemBtn").on("click", function() {
    yellowGem + userNumber;
    console.log(yellowGem + userNumber);
    $("#userNumber").append(yellowGem + userNumber);
    userNumber = userNumber + yellowGem;
    console.log("new user score=" + userNumber)
    $("#userNumber").text(userNumber);
  });
  $("#greenGemBtn").on("click", function() {
    greenGem + userNumber;
    console.log(greenGem + userNumber);
    $("#userNumber").append(greenGem + userNumber);
    userNumber = userNumber + greenGem;
    console.log("new user score=" + userNumber)
    $("#userNumber").text(userNumber);
  });
if (userNumber === computerChoice);
    wins++;
    $("#winCounter").text(wins);
    
});
if (userNumber>computerChoice);
    losses++;
    $("#lossCounter").text(losses);    
    
    
$("#randomNumber").html(computerChoice);


$("#reset").click(reset);


function reset(){


computerChoice = Random=Math.floor((Math.random() * 221) + 19);
console.log(computerChoice);
blueGem  =  Random=Math.floor((Math.random() * 20) + 2);
redGem = Random=Math.floor((Math.random() * 30) + 10);
greenGem = Random=Math.floor((Math.random() * 15) + 5);
yellowGem = Random=Math.floor((Math.random() * 40) + 3);
userNumber===0;
console.log(userNumber)

}
console.log(wins)
}