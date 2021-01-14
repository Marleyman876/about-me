'use strict';

// get username and offer greeting
var userName = prompt('Hello, what\'s your name?');
alert('Hello ' + (userName) + ' welcome to my about me page, lets see if you read my bio.');


//wrtire 5 questions: they must accept yes or no in any case

var answerOne = prompt('Am I from Jamaica?');
answerOne = answerOne.toLocaleLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('that is correct');
  alert('that is correct');
} else {
  alert('I have great vibe of course I\'m Jamaica.');
}

var answerTwo = prompt('Do you like coffee?');
answerTwo = answerTwo.toLocaleLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  // console.log('That is correct I do like coffee');
  alert('That is correct I do like coffee');
} else {
  alert('You\'ve commited a great SIN!');
}

var answerThree = prompt('Did I go to college?');
answerThree = answerThree.toLocaleLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  // console.log('That is correct, I went to the university of Maryland');
  alert('That is correct I went to the University of Marland');
} else {
  alert('You take that back I\'m SMART!');
}

var answerFour = prompt('Is swimming a hobby of mine?');
answerFour = answerFour.toLocaleLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  // console.log ('That is correct I grew up on an island not only do I swim I\'m also Scuba certified, #aquaman');
  alert('That is correct I grew up on an island not only do I swim I\'m also Scuba certified, #aquaman');
} else {
  alert('Seriously I grew up on an island I was born swimming!');
}

var answerFive = prompt('Was I in the Amry?');
answerFive = answerFive.toLocaleLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  // console.log ('That is correct, I served 8 looong years!');
  alert('That is correct, I served 8 looong years!');
} else {
  alert('you better fix yourself I\'m an American Hero!');
}

alert('Thank you ' + (userName) + ' for visiting my page and learning about me, have a great day!');
