const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/booksdb', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('Connected to booksdb...'))
.catch(err => console.log(`Error connecting to database :  ${err}`));

// Exporting all models
module.exports.Book = require('./book');