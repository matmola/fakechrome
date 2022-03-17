const quotes = [
    {
    quote: "Life is far too important a thing ever to talk seriously about.",
    author: "Oscar Wilde",
    },
    {
    quote: "The goal of life is living in agreement with nature.",
    author: "Zeno",
    },
    {
    quote: "What I look forward to is continued immaturity followed by death.",
    author: "Dave Barry",
    },
    {
    quote: "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
    author: "Isaac Asimov",
    },
    {
    quote: "We need men who can dream of things that never were.",
    author: "John F. Kennedy",
    },
    {
    quote: "Laughter is by definition healthy.",
    author: "Doris Lessing",
    },
    {
    quote: "One doesn't have a sense of humor. It has you.",
    author: "Larry Gelbart",
    },
    {
    quote: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France",
    },
    {
    quote: "While there's life, there's hope.",
    author: "Cicero",
    },
    {
    quote: "The policy of being too cautious is the greatest risk of all.",
    author: "Jawaharlal Nehru",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;