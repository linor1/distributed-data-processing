const express = require('express');
const multer = require('multer');
const app = express();
const cors=require('cors')
const port = 5000;

app.use(cors());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload',upload.single("file"), (req, res) => {
	console.log("hello server");
	console.log(req.body);
	console.log("hello server");
	res.json({ status: "success" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

