const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('success');
})

app.post('/fact', (req, res) => {
	const url = 'http://numbersapi.com/' + req.body.input.trim() + '?json';
    fetch(url)
      .then(response => response.json())
      .then(data => res.json(data)) 
      .catch(err => res.json('Please enter a valid form'))
})


app.listen(process.env.PORT || 3001, () => {
	console.log(`app is running on port ${process.env.PORT}`);
})