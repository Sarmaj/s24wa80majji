var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Check if the request has a query argument associated with x
  let x = req.query.x;

  // If x is provided in the query, parse it as a number
  if (x) {
    x = parseFloat(x);
  } else {
    // Generate a random value between 1 and 10 if x is not provided
    x = Math.floor(Math.random() * 10) + 1;
  }

  // Apply Math.log2() function to the random value
  let result = Math.log2(x); // Applying log2 to the value

  // Construct the response string
  let response = `Math.log2() applied to ${x} is ${result}`;

  // Send the response
  res.send(response);
});

module.exports = router;
