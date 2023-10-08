// This demo, in order,
// 1. introduces the document object, allowing us to modify html
// 2. introduces arrays and how to select elements from arrays
// 3. introduces basic string manipulation
// 4. introduces why a function is useful
// 5. introduces interactivity with js
//
// Prior to this demo, I would talk over
// blackout poetry, meaning from deconstruction
// Derrida * Chora L Works (holes poked in every page rendering unreadable)
// removing a word adds meaning; just as surrealism helps you think of reality
// removing words forces you to confront the idea of information
// Tree of Codes for example looks nice
// (from https://archidose.blogspot.com/2012/06/books-with-holes.html)
//
// and give a 10 minute activity making blackout poems
// - provide printouts of today's NYT headlining story and black markers

// First, walk through typing this code

let pElems = document.getElementsByTagName('p');
let indexToChange = Math.floor(Math.random() * pElems.length);
let pElemToChange = pElems[indexToChange];
let words = pElemToChange.innerHTML.split(' ');
let wordIndexToChange = Math.floor(Math.random() * words.length);
words[wordIndexToChange] =
  "<span class='blackout'>" + words[wordIndexToChange] + '</span>';
pElemToChange.innerHTML = words.join(' ');

let bodyElem = document.getElementsByTagName('body')[0];
let newStyle = document.createElement('style');
newStyle.innerText = '.blackout { color: black; background: black; }';
bodyElem.appendChild(newStyle);

// Then, demonstrate it by copying it into the dev console on any page with a
// light background and <p> tags

// Then, as an extension, demonstrate turning it into a function

function blackoutOneWord() {
  // same code copy pasted just wrapped
  let pElems = document.getElementsByTagName('p');
  let indexToChange = Math.floor(Math.random() * pElems.length);
  let pElemToChange = pElems[indexToChange];
  let words = pElemToChange.innerHTML.split(' ');
  let wordIndexToChange = Math.floor(Math.random() * words.length);
  words[wordIndexToChange] =
    "<span class='blackout'>" + words[wordIndexToChange] + '</span>';
  pElemToChange.innerHTML = words.join(' ');

  let bodyElem = document.getElementsByTagName('body')[0];
  let newStyle = document.createElement('style');
  newStyle.innerText = '.blackout { color: black; background: black; }';
  bodyElem.appendChild(newStyle);
}

// Demonstrate the usefulness of a function by pasting this into the dev console,
// then running blackoutOneWord() several times, showing how it allows you to repeat

// Then for fun, let's see make it interactive:

document.addEventListener('mousemove', blackoutOneWord);

// Click around on the page and see things blackout!
// Might help to zoom out
// Try it on https://nyti.ms/46HRqeT or any short article
// it's possible to blackout an element when you click on it; that's a bit
// more complicated...

// good time to quickly demonstrate for loops
for (let i = 0; i < 100; i++) {
  blackoutOneWord();
}
