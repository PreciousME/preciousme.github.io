let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    'Confucius had a great saying that every man has two lives, and the second starts when he realizes he has just one.',
    'There is no answer. The real answer is ‘because.’ You get to make up your own answer is the beauty. If there was a single answer, we would not be free. We would be trapped…we would all have to live to that answer…luckily there is no answer.',
    '“Answers to all the great questions are paradoxes…How do I matter in this infinite universe? On the one hand, you’re separate…every two points are infinitely different…life is a single player game…on the other hand…you’re connected to everything, it’s inseparable.”',
    '“The answer to that question, ‘Do I matter?’ is ‘I am nothing, and I am everything’…all the great questions…all paradoxes…pursuing them is actually really useful because then it gives you certain intrinsic understanding in your life that brings a level of peace.”'
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;

})

document.addEventListener("DOMContentLoaded", function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
});
window.onkeydown = function(event){
    if(event.keyCode === 32) {
        event.preventDefault();
        document.getElementById('btn').click(); //This will trigger a click on the first <a> element.
    }
};
// window.onload(function(){
  
// })