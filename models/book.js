const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 300,
	},
	author: {
		type: String,
		required: true,
		minLength: 10,
		maxLength: 400,
	},
	categories: {
		type: [String],
		required: true,
		enum: ['sf', 'fantasy', 'polar', 'thriller', 'novel', 'marketing', 'business', 'non-fiction', 'fiction'],
		default: undefined,
	},
	stock: {
		type: Number,
		required: true,
		min: 0,
	},
	publishDate: {
		type: Date,
		required: false,
		default: Date.now(),
	},
	isBestSeller: {
		type: Boolean,
		required: false,
		default: false,
	}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;