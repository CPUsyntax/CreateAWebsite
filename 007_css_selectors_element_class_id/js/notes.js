//  a function
// DRY - Don't Repeat Yourself

function go() {
    alert('hi');
    alert('hey');
}
// go();
// go();

// with parameters
var name = "Dennis";
function go_parameters(name, age) {
    alert(name);
    alert(age);
}
//go_parameters();
//go_parameters();

var myList = ['apples', 'oranges', 'bananas'];
myList.forEach(function (value, index) {
    // document.write(value, index, '<br>');
    document.write(value, '<br>');
});
var url = document.URL;
document.write(url);
console.log('test');
/*
   *** JavaScript HTML DOM - Changing HTML ***
The HTML DOM allows JavaScript to change the content of HTML elements.

    *** Changing the HTML Output Stream ***
In JavaScript, document.write() can be used to write directly to the HTML output stream:
/*
    <script>
    document.write(Date());
    </script>
    
or here in a .js file:
    document.write(Date());

    *** Changing HTML Content ***
The easiest way to modify the content of an HTML element is by using the innerHTML property.

To change the content of an HTML element, use this syntax:
    document.getElementById(id).innerHTML = new HTML
    
    *** Javascript selectors ***
Javascript selectors to access the DOM (document object model) and interact with our webpage in realtime.  Selectors allow us to search for elements in the web page, get those html elements, and do things with them.

Selector methods are:
document.getElementsByTagName('div')
document.getElementsByClassName('done')
document.getElementById('my-id')
document.querySelector('#my-id')
document.querySelectorAll('.classname')

Once you have selected an html element, you can modify it:
document.getElementById('my-id').innerHTML = "new html"
document.getElementById('my-id').className = "newclass otherclass"


    *** Javascript Events ***
Simple Javascript Events Tutorial with code!  Almost every Web Developer finds themselves needing to respond to user actions on a page by changing content or adjusting the page display somehow.  The way you do that is by listening to Javascript events.

VIEW THE CODE:
- addition: http://codepen.io/anon/pen/vOeeqG?edi...
- pic link: http://codepen.io/anon/pen/vxYxKN?edi...

Popular Javascript Events Are:
- click
- mouseenter
- mouseleave
- mousedown
- mouseup
- mousemove
- keydown
- keyup
- blur
- focus

See list of all javascript events here: https://developer.mozilla.org/en-US/d...

In this lesson, we'll add event listeners to html elements.  When the users click, focus, blur, press a key, or move their mouse, javascript will get notified and we can make the webpage change.

Listening to Javascript events is a bread and butter task for web development and web developers.




In the last video, I covered Javascript Events for new Javascript Web Developers.  Let's get a little more complex with those events by adding a loop and some different types of event listeners.

Here's the source code: http://codepen.io/anon/pen/doZbPQ?edi...

And here's all the key codes: https://css-tricks.com/snippets/javas...

A web developer often needs to add an event to multiple elements, but you don't want to repeat your code all over the place, so the best way to do it is to make a loop.

The good news is, since this loop just goes from i=0, i=1, i=2, etc, we can use one loop and add events to all 3 li's & inputs with it.








*/
document.getElementById("p1").innerHTML = name;
document.write(Date());
document.write('<br>hi<br>');
document.write('hi<br>');
document.write('hi<br>');
document.write('hi<br>');
// name = prompt();yo
document.write(name, '<br>');
/*
    *** Changing the Value of an Attribute ***
To change the value of an HTML attribute, use this syntax:
    document.getElementById(id).attribute = new value
Example:
<img id="myImage" src="smiley.gif">
document.getElementById("myImage").src = "landscape.jpg";
*/