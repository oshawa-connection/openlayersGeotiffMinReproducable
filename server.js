const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"dist")));
app.use(express.static(path.join(__dirname,"images"))); 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})