const express = require('express');
const app = express();

// Check if a given number is a prime number.
function isPrime(value) {
  for(var i = 2; i < value; i++) {
    if(value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

app.get('/', (req, res) => {
  // make sure a number was provided
  if(!req.query.num) {
    return res.send(`Please provide a number via URL parameter, example: <a href="/?num=2038074743">?num=2038074743</a>`);
  }

  const num = parseInt(req.query.num);

  let message = `Sorry, ${num} is not prime :(`;
  if(isPrime(num)) { 
    message = `It looks like ${num} is prime!`;
  }

  res.send(message);
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
