const express = require('express');
const multer = require('multer')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const File = require('./models/files')
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/react-fileupload', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
})

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'files')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})
const upload = multer({
	storage: storage
})

app.post('/upload', upload.single('file'), async (req, res) => {
	const file = new File({
		...req.body
	})
	try {
		await file.save()
		res.send(req.file)
		res.status(200)
	} catch (e) {
		res.status(400).send(e)
	}
})
app.get('/uploadHistory', async (req, res) => {
	const last10Files = await File.find({}).sort({ createdAt: 'desc' }).limit(10)
	res.send(last10Files)

})


app.use(express.json())

app.listen(8000, function () {

	console.log('App running on port 8000');

});
