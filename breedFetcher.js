const request = require('request');
const args = process.argv;
const search = args[2];
const api = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

request(api , (error, response, body) => {
  if (error) {
    console.log('there was an error with the request:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  }
});