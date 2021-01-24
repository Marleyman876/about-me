'use strict';

var score = 0;

var userName = prompt('Hello, what\'s your name?');
alert('Hello ' + (userName) + ' welcome to my about me page, lets see if you read my bio.');

function questionOne() {
  var answerOne = prompt('Am I from Jamaica?');
  answerOne = answerOne.toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    // console.log('that is correct');
    alert('that is correct');
    score++;
  } else {
    alert('I have great vibe of course I\'m Jamaica.');
  }

}


function questionTwo() {
  var answerTwo = prompt('Do I like coffee?');
  answerTwo = answerTwo.toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    // console.log('That is correct I do like coffee');
    alert('That is correct I do like coffee');
    score++;
  } else {
    alert('You\'ve committed a great SIN!');
  }

}


function questionThree() {
  var answerThree = prompt('Did I go to college?');
  answerThree = answerThree.toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    // console.log('That is correct, I went to the university of Maryland');
    alert('That is correct I went to the University of Maryland');
    score++;
  } else {
    alert('You take that back I\'m SMART!');
  }

}


function questionFour() {
  var answerFour = prompt('Is swimming a hobby of mine?');
  answerFour = answerFour.toLowerCase();

  if (answerFour === 'yes' || answerFour === 'y') {
    // console.log ('That is correct I grew up on an island not only do I swim I\'m also Scuba certified, #aquaman');
    alert('That is correct I grew up on an island not only do I swim I\'m also Scuba certified, #aquaman');
    score++;
  } else {
    alert('Seriously I grew up on an island I was born swimming!');
  }

}


function questionFive() {
  var answerFive = prompt('Was I in the Army?');
  answerFive = answerFive.toLocaleLowerCase();

  if (answerFive === 'yes' || answerFive === 'y') {
    // console.log ('That is correct, I served 8 looong years!');
    alert('That is correct, I served 8 looong years!');
    score++;
  } else {
    alert('you better fix yourself I\'m an American Hero!');
  }

}


function questionSix() {

  var maxCount = 4;
  var number = 52;
  for (var i = 0; i < maxCount; i++) {
    var answerSix = parseInt(prompt('How many weeks are in a calendar year?'));
    if (answerSix === number) {
      alert('your are correct');
      score++;
      break;
    } else if (answerSix > number) {
      alert('too high, guess again');
    } else if (answerSix < number) {
      alert('too low try again');
    }
    if (i === maxCount - 1) {
      alert(`the correct answer is, ${number}`);

    }

  }
}


var favoriteEvent = ['dancehall', 'carnival', 'reggae concert', 'going to dinner', 'going to the movies'];

var answerCorrectly = false;

var count = 6;

function questionSeven() {

  for (var i = 0; i < count; i++) {
    var party = prompt('Name one of my favorite event to attend?');

    for (var j = 0; j < favoriteEvent.length; j++) {
      if (party === favoriteEvent[j]) {
        alert(`you are correct, ${favoriteEvent[j]} is my favorite event`);
        answerCorrectly = true;
        score++;

      }
    }
    if (answerCorrectly === true) {
      break;
    }

  }

  if (i === count || answerCorrectly) {
    alert(`My favorite events are ${favoriteEvent}`);
  }

}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();


alert(`Goodbye, ${userName} thank you for visiting my page and learning about me, I hope you have a great day. Your score for today is ${score}`);

