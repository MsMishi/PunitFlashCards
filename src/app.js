const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


app.get('/cards', (req, res) =>{
  res.render('/');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});
