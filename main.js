let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Confucius had a great saying that every man has two lives, and the second starts when he realizes he has just one."',
    '“I don’t have time is just another way of saying, It’s not a priority.”',
    '“Answers to all the great questions are paradoxes…How do I matter in this infinite universe? On the one hand, you’re separate…every two points are infinitely different…life is a single player game…on the other hand…you’re connected to everything, it’s inseparable.”',
    '“The answer to that question, ‘Do I matter?’ is ‘I am nothing, and I am everything’…all the great questions…all paradoxes…pursuing them is actually really useful because then it gives you certain intrinsic understanding in your life that brings a level of peace.”',
    '“You have to do hard things…to create your own meaning in life.”',
    '“The world just reflects your own feelings back at you. Reality is neutral.”',
    '“Let’s go back to desire…this is old, old Buddhist wisdom…Desire to me is a contract that you make with yourself to be unhappy until you get what you want, and I keep that in front of mind…Pick your one overwhelming desire. It’s okay to suffer over that one.”',
    '“The universe is rigged in such a way that if you just want one thing and you focus on that, you will get it. But everything else, you got to let go.”',
    '“The universe is rigged in such a way that if you just want one thing and you focus on that, you will get it. But everything else, you got to let go.”',
    '“The way to get out of the competition trap is actually to be authentic. The way to retire is actually to find the thing that you know how to do better than anybody. And, you know how to do that better than anybody because you love to do it.”',
    '“I’m always ‘working.’ It looks like work to them, but it feels like play to me.”',
    '“When you’re actually trying to live your life in congruence with reality, you want to have a deep understanding of what you do and why you do it. So, it’s much more important to know the basics really well than to know the advanced.”',
    '“School, politics, sports, and games train us to compete against others. True rewards — wealth, knowledge, love, fitness, and equanimity — come from ignoring others and improving ourselves.”',
    '“Most of modern life, all our diseases, are diseases of abundance, not diseases of scarcity.”',
    '“The way to survive in modern society is to be an ascetic. It is to retreat from society. There’s too much society everywhere you go…The only solution is turn it off.”',
    '“The ancient struggle used to be the tribal struggle…Modern life, we’re so free, everything has become atomized, we stand alone…The modern struggle as an individual is…drawing your own boundaries, and there’s no one there to help you.”',
    '“The ancient struggle used to be the tribal struggle…Modern life, we’re so free, everything has become atomized, we stand alone…The modern struggle as an individual is…drawing your own boundaries, and there’s no one there to help you.”',
    '“Life is really a single player game. It’s all going on in your head. Whatever you think, you believe, will very much shape your reality. Both from what risks you take and what actions you perform, but also just everyday experiences of reality.”',
    '“Doctors won’t make you healthy. Nutritionists won’t make you slim. Teachers won’t make you smart. Gurus won’t make you calm. Mentors won’t make you rich. Trainers won’t make you fit. Ultimately, you have to take responsibility. Save yourself.“',
    '“Only the individual transcends.”',
    '“You want to rest your mind. You want to learn how to settle into your mind. Now, I look forward to solitary confinement. You leave me alone for a day, it will be the happiest day I’ve had in awhile. That is a superpower that I think everybody can attain.”',
    '“A clear mind, leads to better judgement, leads to better outcome.”',
    '“If you want to operate at peak performance, you have to learn how to tame your mind.”',
    '“If you want to be a clear thinker, you cannot pay attention to politics. It will destroy your ability to think.”',
    '“The mind should be a servant or tool, not the master…I want to break the habit of uncontrolled thinking.”',
    '“Enlightenment is the space between your thoughts.”',
    '“A busy mind can often rob you of peace of mind. The peace that we seek is not peace of mind, it’s peace from mind.”',
    '“A busy mind accelerates the perceived passage of time. Buy more time by cultivating peace of mind.”',
    '“The way we think you get peace is by resolving all your external problems, but there are unlimited external problems. So, the only way to actually get peace is on the inside by giving up this idea of problems.”',
    '“If you understand things, if you see things properly, you will naturally, slowly develop peace from mind.”',
    '“You’re born, you have a whole set of sensory experiences and stimulations and lights and colors and sounds, and then you die. And how you choose to interpret that is up to you. You do have that choice.”',
    '“Watch your mind all day long…You can meditate 24/7. Meditation is not a sit down, close your eyes activity. Meditation is just basically watching your own thoughts like you would watch anything else in the outside world.”',
    '“A rational person can find peace by cultivating indifference to things outside of their control.”',
    '“Peace is happiness at rest, and happiness is peace in motion. You can convert peace to happiness any time you want, but peace is want you want most of the time…If you’re a peaceful person, anything you do will be a happy activity.”',
    '“Peace is happiness at rest, and happiness is peace in motion. You can convert peace to happiness any time you want, but peace is want you want most of the time…If you’re a peaceful person, anything you do will be a happy activity.”“People who live far below their means enjoy a freedom that people busy upgrading their lifestyles can’t fathom.”',
    '“People who live far below their means enjoy a freedom that people busy upgrading their lifestyles can’t fathom.”',
    '“Happiness is also a choice. If you’re so smart, how come you aren’t happy? How come you haven’t figured that out? That’s my challenge to all the people who think they’re so smart and so capable.”',
    '“In every moment, in everything that happens, you can look on the bright side of something. So I used to do that forcibly and then I trained it until it became second nature.”',
    '“Most smart people over time realize that possessions don’t make them happy. You have to go through that…As you get older, you just realize that there’s no happiness in material possessions.”',
    '“Creativity is the last frontier…automation over a long enough period of time will replace every non-creative job…that’s great news. That means that all of our basic needs are taken of, and what remains for us is to be creative, which is really what every human wants.”',
    '“Art is just creativity. It’s just anything that’s done for its own sake. So what are the things that are done for their own sake?…Loving somebody, creating something, playing.”',
    '“Wisdom is understanding the long term consequences of your actions.”',
    '“I live for the aha moment…when you connect two things together that you hadn’t connected together before…it helps form a steel framework of understanding in your mind that you can then hang other ideas off of…that’s what I live for…it’s like curiosity fulfilled.”',
    '“I think the reason why people like hearing me is because…when you combine things you’re not supposed to combine, people get interested.”',
    '“I like the model of life that the ancients had…there’s sort of this arc to life where you try your hand at everything…You’ve got one life, just do everything you’re gonna do.”',
    '“At some level, all humans are broad, we’re all multivariate…at some deep level…every human, basically, is capable of every experience and every thought.”',
    '“Would I still be interested in learning this thing if I couldn’t ever tell anybody about it? That’s how I know it’s real. That’s how I know it’s something I actually want to know.”'


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