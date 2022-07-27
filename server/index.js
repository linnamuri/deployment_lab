const express = require('express');
const { homedir } = require('os');
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,"/../public")))

app.get('/',function(req,res) {
  res.sendFile(path.resolve( __dirname,'../public/index.html'));
});
public/homedir.html

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})