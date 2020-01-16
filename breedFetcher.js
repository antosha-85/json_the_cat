const request = require('request');
const args = process.argv;
const search = args[2];


function fetchBreedDescription(breedName, cb) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}` , (error, response, body) => {
        if (error) {
            cb(err, null);
        } else {
            cb(null, body);
        }
      });
}

module.exports = { fetchBreedDescription };