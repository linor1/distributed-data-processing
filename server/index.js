const express = require('express');
const app = express();
const port = 5000;


app.post('/upload', (req, res) => {
	console.log("hello server")
	const data = req.body;
	console.log("hello server 2")
	res.send({
    	message: 'New user was added to the list',
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

