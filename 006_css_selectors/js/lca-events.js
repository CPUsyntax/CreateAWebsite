// LearnCode.academy
// 660K subscribers

// In the last video, I covered Javascript Events for new Javascript Web Developers.  Let's get a little more complex with those events by adding a loop and some different types of event listeners.

// Here's the source code: http://codepen.io/anon/pen/doZbPQ?edi...

// And here's all the key codes: https://css-tricks.com/snippets/javas...

// A web developer often needs to add an event to multiple elements, but you don't want to repeat your code all over the place, so the best way to do it is to make a loop.

// The good news is, since this loop just goes from i=0, i=1, i=2, etc, we can use one loop and add events to all 3 li's & inputs with it.





/*
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

// numOne.addEventListener("mouseenter", function() {
// numOne.addEventListener("focus", function() {
numOne.addEventListener('click', function() {
  console.log('hi');
  // alert("hi");

});
*/


// Part 1
// numOne.addEventListener("input", add);
// numTwo.addEventListener("input", add);

// function add() {
//   var one = parseFloat(numOne.value) || 0;
//   var two = parseFloat(numTwo.value) || 0;
  
//   addSum.innerHTML = "your sum is: " + (one+two);
// }

// Part 2
var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}


