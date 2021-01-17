'use strict';

var score = 0;

var userName = prompt('Hello, what\'s your name?');
alert('Hello ' + (userName) + ' welcome to my about me page, lets see if you read my bio.');


var answerOne = prompt('Am I from Jamaica?');
answerOne = answerOne.toLocaleLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('that is correct');
  alert('that is correct');
  score++;
} else {
  alert('I have great vibe of course I\'m Jamaica.');
}

var answerTwo = prompt('Do you like coffee?');
answerTwo = answerTwo.toLocaleLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  // console.log('That is correct I do like coffee');
  alert('That is correct I do like coffee');
  score++;
} else {
  alert('You\'ve commited a great SIN!');
}

var answerThree = prompt('Did I go to college?');
answerThree = answerThree.toLocaleLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  // console.log('That is correct, I went to the university of Maryland');
  alert('That is correct I went to the University of Marland');
  score++;
} else {
  alert('You take that back I\'m SMART!');
}

var answerFour = prompt('Is swimming a hobby of mine?');
answerFour = answerFour.toLocaleLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  // console.log ('That is correct I grew up on an island not only do I swim I\'m also Scuba certified, #aquaman');
  alert('That is correct I grew up on an island not only do I swim I\'m also Scuba certified, #aquaman');
  score++;
} else {
  alert('Seriously I grew up on an island I was born swimming!');
}

var answerFive = prompt('Was I in the Amry?');
answerFive = answerFive.toLocaleLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  // console.log ('That is correct, I served 8 looong years!');
  alert('That is correct, I served 8 looong years!');
  score++;
} else {
  alert('you better fix yourself I\'m an American Hero!');
}


var maxCount = 4;
var number = 52;
for (var i = 0; i < maxCount; i++) {
  var questionSixx = parseInt(prompt('How many weeks are in a calendar year?'));
  if (questionSixx === number) {
    alert('your are correct');
    score ++;
    break;
  } else if (questionSixx > number) {
    alert('too high, guess again');
  } else if (questionSixx < number) {
    alert('too low try again');
  }
  if (i === maxCount - 1) {
    alert(`the correct answer is, ${number}`);

  }

}

var favoriteEvent = ['dancehall', 'mass', 'concert', 'play', 'going to the movies'];

var answerCorrectly = false;

var count = 6;

for ( i = 0; i < count; i++) {
  var party = prompt('what is my favorite event to attend?');

  for (var j = 0; j < favoriteEvent.length; j++) {
    if (party === favoriteEvent[j]) {
      alert(`you are correct, ${favoriteEvent[j]} is my favourite event`);
      answerCorrectly = true;
      score++;
    }
  }
  if (answerCorrectly) {
    break;
  }

}
if (i === count || answerCorrectly) {
  alert(`My favortie events are ${favoriteEvent}`);

}

alert(`Goodbye, ${userName} thank you for visitng my page and learning about me, I hope you have a great day. Your score for today is ${score}`);
