import * as db from './src/js/db'
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

db.SetUpConnection();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port, () => 
{
  console.log(`Listening on port ${port}`);
});

app.get('/login',db.GetUsers);

app.post('/signup',db.AddUser);
app.post('/postInfo',db.AddPost);
app.get('/postInfo',db.GetPost);
app.delete('/postInfo/:id',db.DeletePost);


