'use strict';

// get username and offer greeting 
var userName = prompt('Hello, what\'s your name?')
alert('Hello ' + (userName) + ' welcome to my about me page, lets see if you read my bio.');


//wrtire 5 questions: they must accept yes or no in any case

var questionOne = prompt('Am I from Jamaica?').toLocaleLowerCase();
questionOne = questionOne.toLocaleLowerCase();

if(questionOne === 'yes' || questionOne === 'y') {
  // console.log('that is correct');
  alert('that is correct');
} else{
  alert('I have great vibe of course I\'m Jamaica.');
}

var questionTwo = prompt('Do you like coffee?');
questionTwo = questionTwo.toLocaleLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y') {
  // console.log('That is correct I do like coffee');
  alert('That is correct I do like coffee');
} else{
  alert('You\'ve commited a great SIN!');
}

var questionThree = prompt('Did I go to college?');
questionThree = questionThree.toLocaleLowerCase();

if(questionThree === 'yes' || questionThree === 'y') {
  // console.log('that is correct');
  alert('That is correct I went to the University of Marland');
} else{
  alert('You take that back I\'m SMART!');
}

var questionFour = prompt('Is swimming a hobby of mine?');
questionFour = questionFour.toLocaleLowerCase();

if(questionFour === 'yes' || questionFour ==='y') {
  // console.log ('That is correct I grew up on an island not only do i swim I\'m also Scuba certified, #aquaman');
  alert('That is correct I grew up on an island not only do i swim I\'m also Scuba certified, #aquaman');
} else {
  alert('seriously I grew up on an island I was born swimming!');
}

var questionFive = prompt('Was I in the Amry?');
questionFive = questionFive.toLocaleLowerCase();

if(questionFive === 'yes' || questionFive === 'y'){
  alert('That is correct, I served 8 looong years!');
} else{
  alert('you better fix yourself I\'m an American Hero!');
}

alert('Thank you ' + (userName) + ' for visiting my page and learning about me, don\'t be a stranger. have a great day.');
