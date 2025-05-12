const express = require('express');
const multer = require('multer');
const app = express();
const cors=require('cors')
const port = 5000;
const {parse} = require('csv-parse')

app.use(cors());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single("file"), (req, res) => {
	csvText = req.file.buffer.toString('utf-8');
	parse(csvText, {columns: true, delimiter: ','}, function(err, records) {
		if (err) {
			console.error(err);
			return res.status(500).send('Error parsing CSV file');
		}
		res.json(records);
	});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

