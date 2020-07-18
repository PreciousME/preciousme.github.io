let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Confucius had a great saying that every man has two lives, and the second starts when he realizes he has just one."',

    '“"I don’t have time" is just another way of saying, "It’s not a priority."”',

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
    '“Would I still be interested in learning this thing if I couldn’t ever tell anybody about it? That’s how I know it’s real. That’s how I know it’s something I actually want to know.”',

    '“Even today, what to study and how to study it are more important than where to study it and for how long. The best teachers are on the Internet. The best books are on the Internet. The best peers are on the Internet. The tools for learning are abundant. It’s the desire to learn that’s scarce.”',

    '“I no longer track books read or even care about books read. It’s about understanding concepts.”',

    '“I probably read 1-2 hours a day, and that puts me in the top .00001%. I think that alone accounts for any material success that I’ve had in my life and any intelligence that I might have.”',

    '“When you look at the greatest artists and creators, they have this ability to start over that nobody else does.”',

    '“Forty hour workweeks are a relic of the Industrial Age. Knowledge workers function like athletes — train and sprint, then rest and reassess.”',

    '“A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.”',

    '“Information is everywhere but its meaning is created by the observer that interprets it. Meaning is relative and there is no objective, over-arching meaning.”',

    '“If you’re more passionate about founding a business than the business itself, you can fall into a ten year trap. Better to stay emotionally unattached and select the best opportunity that arises. Applies to relationships too.”',

    '“Smart money is just dumb money that’s been through a crash.”',

    '“The secret to public speaking is to speak as if you were alone.”',

    '“Sophisticated foods are bittersweet (wine, beer, coffee, chocolate). Addictive relationships are cooperative and competitive. Work becomes flow at the limits of ability. The flavor of life is on the edge.”',

    '“Technology is not only the thing that moves the human race forward, but it’s the only thing that ever has. Without technology, we’re just monkeys playing in the dirt.”',

    '“The fundamental delusion — there is something out there that will make me happy and fulfilled forever.”',

    '“Success is the enemy of learning. It can deprive you of the time and the incentive to start over. Beginner’s mind also needs beginner’s time.”',

    '“Don’t debate people in the media when you can debate them in the marketplace.”',

    '“A contrarian isn’t one who always objects — that’s a confirmist of a different sort. A contrarian reasons independently, from the ground up, and resists pressure to conform.”',

    '“Branding requires accountability. To build a great personal brand (an eponymous one), you must take on the risk of being publicly wrong.”',
    '“Before you can lie to another, you must first lie to yourself.”',

    '“Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.”',
    '“You make your own luck if you stay at it long enough.”',

    '“The power to make and break habits and learning how to do that is really important.”',

    '“We’re not really here for that long and we don’t really matter that much. And nothing that we do lasts. So eventually you will fade. Your works will fade. Your children will fade. Your thoughts will fade. This planet will fade. The sun will fade. It will all be gone.”',

    '“A rational person can find peace by cultivating indifference to things outside of their control.”',

    '“The first rule of handling conflict is don’t hang around people who are constantly engaging in conflict.”',

    '“People spend too much time doing and not enough time thinking about what they should be doing.”',

    '“The people who succeed are irrationally passionate about something.”',

    '“I don’t plan. I’m not a planner. I prefer to live in the moment and be free and to flow and to be happy.”',

    '“If you see a get rich quick scheme, that’s someone else trying to get rich off of you.”',

    '“If you try to micromanage yourself all you’re going to do is make yourself miserable.”',

    '“If it entertains you now but will bore you someday, it’s a distraction. Keep looking.”',

    '“If the primary purpose of school was education, the Internet should obsolete it. But school is mainly about credentialing.”',

    '“Desire is a contract that you make with yourself to be unhappy until you get what you want.”',

    '“Technology is applied science. Science is the study of nature. Mathematics is the language of nature. Philosophy is the root of mathematics. All tightly interrelated.”',

    '“Be present above all else.”',

    '“All the benefits in life come from compound interest — money, relationships, habits — anything of importance.”',

    '“Who you do business with is just as important as what you choose to do.”',

    '“If you can’t see yourself working with someone for life, don’t work with them for a day.”',

    '“Earn with your mind, not your time.”',

    '“Humans are basically habit machines… I think learning how to break habits is actually a very important meta skill and can serve you in life almost better than anything else.”',

    '“The older the problem, the older the solution.”',

    '“It’s the mark of a charlatan to try and explain simple things in complex ways and it’s the mark of a genius to explain complicated things in simple ways.”',

    '“The Efficient Markets Hypothesis fails because humans are herd animals, not independent rational actors. Thus the best investors tend to be antisocial and contrarian.”',

    '“People who try to look smart by pointing out obvious exceptions actually signal the opposite.”',

    '“You’re never going to get rich renting out your time.”',

    '“Lots of literacy in modern society, but not enough numeracy.”',

    '“Above “product-market fit” is “founder-product-market fit.”',

    '“Society has had multiple stores of value, as none is perfectly secure. Gold, oil, dollars, real estate, (some) bonds & equities. Crypto is the first that’s decentralized and digital.”',

    '“Crypto is a bet against the modern macroeconomic dogma, which is passed off as science, but is really a branch of politics — with rulers, winners, and losers.”',

    '“Clear thinkers appeal to their own authority.”',

    '“Think clearly from the ground up. Understand and explain from first principles. Ignore society and politics. Acknowledge what you have. Control your emotions.”',

    '“Cynicism is easy. Mimicry is easy. Optimistic contrarians are the rarest breed.”',

    '“If they can train you to do it, then eventually they will train a computer to do it.”',

    '“If you’re desensitized to the fact that you’re going to die, consider it a different way. As far as you’re concerned, this world is going to end. Now what?”',

    '“Following your genuine intellectual curiosity is a better foundation for a career than following whatever is making money right now.”',

    '“Objectively, the world is improving. To the elites, it’s falling apart as their long-lived institutions are flattened by the Internet.”',

    '“One of the most damaging and widespread social beliefs is the idea that most adults are incapable of learning new skills.”',

    '“A personal metric: how much of the day is spent doing things out of obligation rather than out of interest?”',

    '“Caught in a funk? Use meditation, music, and exercise to reset your mood. Then choose a new path to commit emotional energy for rest of day.”',

    '“To be honest, speak without identity.”',

    '“A rational person can find peace by cultivating indifference to things outside of their control.”',

    '“Don’t do things that you know are morally wrong. Not because someone is watching, but because you are. Self-esteem is just the reputation that you have with yourself.”',

    '“Total honesty at all times. It’s almost always possible to be honest & positive.”',

    '“Truth is that which has predictive power.”',

    '“Watch every thought. Always ask, why am I having this thought?”',

    '“All greatness comes from suffering.”',

    '“Love is given, not received.”',

    '“Every moment has to be complete in and of itself.”',

    '“I don’t have time is just saying it’s not a priority.”',

    '“Happiness is a state where nothing is missing.”',

    '“If you don’t love yourself who will?”',

    '“If being ethical were profitable everybody would do it.”',

    '“Escape competition through authenticity.”',

    '“Morality and ethics automatically emerge when we realize the long term consequences of our actions.”',

    '“Investing favors the dispassionate. Markets efficiently separate emotional investors from their money.”',

    '“Knowledge is a skyscraper. You can take a shortcut with a fragile foundation of memorization, or build slowly upon a steel frame of understanding.”',

    '“A busy mind accelerates the perceived passage of time. Buy more time by cultivating peace of mind.”',

    '“Politics is the exercise of power without merit.”',

    '“Politics and merit are opposite ends of a spectrum. More political organizations are less productive, have less inequality, and top performers opt out. More merit based organizations have higher productivity, more inequality, and higher odds of internal fracture.”',

    '“You can have the mind or you can have the moment.”',

    '“You have to surrender, at least a little bit, to be the best version of yourself possible.”',

    '“The first step to being happier, is to believe you can be happier”',

    '“If you’re indifferent to what people think, you can be confident, and if you’re confident, you can speak well”',

    '“What you do, and how you do it, is so much more important than how hard you do it”',

    '“The number one thing you can have is general intelligence, because general intelligence allows you to get good at everything else”',

    '“If you’re smart, and question everything, you’ll eventually figure everything else out at a good enough level”',

    '“Create a product out of whatever it is that you naturally and uniquely do really well”',

    '“The trick to doing anything, is first cultivating a desire for it”',

    '“Discipline is just you fighting with yourself to do something you don’t want to do”',

    '“Most of the gains in life come from suffering in the short term, so you can get paid in the long term”',

    '“People who live below their expectations, enjoy a freedom people who are busy upgrading their lifestyles can’t afford”',

    '“All fears are children of the fear of death”',

    '“If you’re truly living life on your terms, and you are happy, you’ll find that you are less afraid of death”',

    '“It’s not that we fear death, it’s that we fear not living the life we want”',

    '“Anytime you can trade money for time, you should, because time is the thing you’ll run out of first”',

    '"If you want to live in the future, live in the freest place around. Because eventually, all of the innovators and creators will show up there."',

    '"Be conservative in your behavior, be liberal in your tolerance."',

    "'If you can speed read it, it isn't worth reading.'",

    '"If you need a degree to do it, it’s not going to make you wealthy."',

    '"In the startup olympics, first place gets a monopoly, second place gets a medal, and there is no third place."'
    



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