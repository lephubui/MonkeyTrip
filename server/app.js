"use strict";

const express = require('express');
const app = express();
const path = require('path');
const shared = require('./config/shared');

const googleMapsClient = require('@google/maps').createClient({
  key:shared.googleMapAPIKey,
  Promise: Promise
});

googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
  .asPromise()
  .then((response) => {
    console.log(response.json.results);
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../view/index.html'));
})

app.get('/googleMap', function (req, res) {
  res.send('Your in Google Map');
})
console.log('Start Server at port 2892'); 
app.listen(2892)