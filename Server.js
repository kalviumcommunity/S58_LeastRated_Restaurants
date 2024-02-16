const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 7007;
import {Data} from "./Config/Data"

// define the ping route with the response in JSON
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });

});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on Port ${port}`);
  });
}

module.exports = app;
