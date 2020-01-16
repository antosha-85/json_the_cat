const request = require('request');


const fetchBreedDescription = (breedName, cb) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}` , (error, response, body) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, body);
    }
  });
};

module.exports = { fetchBreedDescription };