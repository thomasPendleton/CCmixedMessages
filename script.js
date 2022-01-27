const container = document.getElementById('quote')
const author = document.getElementById('author')
const quotes = [
  {
    author: 'Tony Robbins',
    quote:
      "It's not what we do once in a while that shapes our lives, but what we do consistently.",
  },
  {
    author: 'Tony Robbins',
    quote:
      "If you do what you've always done, you'll get what you've always gotten.",
  },
  {
    author: 'Elon Musk',
    quote:
      "I take the position that I'm always to some degree wrong, and the aspiration is to be less wrong.",
  },
]

const randNumber = Math.floor(Math.random() * quotes.length)
const quote = quotes[randNumber].quote
const auth = quotes[randNumber].author
container.innerHTML = `${quote}`
author.innerHTML = `-${auth}`
