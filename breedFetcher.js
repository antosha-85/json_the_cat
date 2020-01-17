const request = require('request');


const fetchBreedDescription = (breedName, cb) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}` , (error, response, body) => {
    if (error) {
      cb(error, null);
    } else {
      const data = JSON.parse(body);
      console.log(data)
      if (data.length === 0) {
          cb("errrprr", null)
      } //body = '[]' => []
      else{
        cb(null, data);
      }
    }
  });
};

module.exports = { fetchBreedDescription };