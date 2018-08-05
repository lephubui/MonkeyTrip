"use strict";

const express = require('express');
const app = express();

const shared = require('./config/shared');

const googleMapsClient = require('@google/maps').createClient({
  key:shared.googleMapAPIKey,
  Promise: Promise
});

var results; 
googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
  .asPromise()
  .then((response) => {
    results = response;
    console.log(response.json.results);
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/googleMap', function (req, res) {
  res.send('Your in Google Map');
  res.send(results);
})
console.log('Start Server at port 2892'); 
app.listen(2892)