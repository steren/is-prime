const express = require('express');
const app = express();

// Check if a given number is a prime number.
function isPrime(value) {
  for(var i = 2; i < value; i++) {
    if(value % i === 0) {
      return false;
    }
    // Print some logs every 1,000,000
    if(i % 1000000000 === 0) {
      console.log(`Currently at ${value}`);
    }
  }
  return value > 1;
}

app.get('/', (req, res) => {
  // make sure a number was provided
  if(!req.query.num) {
    return res.send(`Please provide a number via URL parameter, example: <a href="/?num=2038074743">?num=2038074743</a>`);
  }
  
  if(req.query.async) {
    res.send('got it, check logs for the answer.')
  }

  const num = parseInt(req.query.num);

  console.log(`Is ${num} prime?`);
  
  let message = `Sorry, ${num} is not prime :(`;
  if(isPrime(num)) { 
    message = `It looks like ${num} is prime!`;
  }
  
  console.log(message);

  if(!req.query.async) {
    res.send(message);
  }
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
