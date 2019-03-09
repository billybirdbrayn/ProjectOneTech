/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  The following is an array of quote objects named `quotes`.
  Each quote object has a `quote`, `year`, and `citation`. 
***/
var quotes = [
  {
    quote: 'My Music Makes You Dance',
    source: 'Barry Maniiow',
    citation: 'I Write the Songs',
    year: '1976'
  },

  {
    quote: 'And her eyes shine like the moon in the sea',
    source: 'Al Stewart',
    citation: 'Year of the Cat',
    year: '1976'
  },
  {
    quote: 'All the Leaves are Brown and the sky is grey',
    source: 'Mamas and the Papas',
    citation: 'California Dreamin',
    year: '1965'
  },

  {
    quote: 'Dancing, Dancing, Dance the Night Away!',
    source: 'Leo Sayer',
    citation: 'You Make me Fee Like Dancing',
    year: '1977'
  },

  {
    quote: 'It is a big enough unbrella, But it is aways me that ends up getting wet',
    source: 'Sting',
    citation: 'Every Little Thing She Does Is Magic',
    year: '1981'
  },

  {
    quote: 'Why Tell the Truth when a good lie will do',
    source: 'JR Ewing',
    citation: 'Dallas',
    year: '1981'
  },

  {
    quote: 'Your problems are my problems, my favorite depositor',
    source: 'Milburn Drysdale',
    citation: 'Beverly Hillbillies',
    year: '1963'
  }
];

/***
  getRandomQuote` function:
   generates a random number and uses the random number to `return` a random quote object from the 
     `quotes` array.
***/


function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) {
    var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}

/***
  `printQuote` function: 
   calls the `getRandomQuote` function and sets the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var message = " ";     // Initializing the message variable with empty string
  var response = getRandomQuote(quotes);
  message = "<p class='quote'>" + response.quote + "</p>";
  message += "<p class='source'>" + response.source;
  message += "<span class='citation'>" + response.citation + "</span>";
  message += "<span class='year'>" + response.year + "</span>"
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
  document.getElementById("quote-box").style.backgroundColor = "lightblue";

  //  Found code snipet/help from MDN Introduction to Events
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events  

  var btn = document.getElementById("loadQuote");

  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

  btn.onclick = function () {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }
}

printQuote();


/***
  Following Code was provided by Team Treehouse.   The event listener will execute or call the `printQuote` 
  function. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


