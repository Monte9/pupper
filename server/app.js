const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();

// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/process_image', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)

  // strip off the data: url prefix to get just the base64-encoded bytes
  var data = req.body.image.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  fs.writeFile('image.png', buf);

  // The path to the local image file, e.g. "/path/to/image.png"
  const fileName = 'image.png';

  // Performs face detection on the local file
  vision.detectFaces(fileName)
  .then((results) => {
    res.send(results)

    const faces = results[0];

    console.log('Faces:');
    faces.forEach((face, i) => {
      console.log(face);
      console.log(`  Face #${i + 1}:`);
      console.log(`  Joy: ${face.joy}`);
      console.log(`  Anger: ${face.anger}`);
      console.log(`  Sorrow: ${face.sorrow}`);
      console.log(`  Surprise: ${face.surprise}`);
    });
  });


})

module.exports = app;
