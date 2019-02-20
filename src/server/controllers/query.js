const request = require('request');

module.exports = (db) => {

  let get = (req, res) => {

    const apiKey = 'bsh6u8q5fdw95yrcy6wkvj75';

    const query = req.query.search;

    const url = `http://api.walmartlabs.com/v1/search?apiKey=${apiKey}&query=${query}`;

    request(url, function (error, queryResponse, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', queryResponse && queryResponse.statusCode); // Print the response status code if a response was received

          res.send(body);
    });
   }

  return {
    get:get
  };
};


//p6macs9emuek26apm32yp4g7