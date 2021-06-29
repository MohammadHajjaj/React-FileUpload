const mongoose = require('mongoose')
const fileSchema = new mongoose.Schema({
	fileName: String,
	fileSize: String,
	fileLastModified: String
},
	{ timestamps: true }
)


const File = mongoose.model('File', fileSchema)

module.exports = File