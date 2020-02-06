const db = require('../models'); // rien à mettre derriere car dans models on a un index.js

exports.createBook = async(req, res) => {
	console.log(req.body);
	try {
		let newBook = await db.Book.create(req.body);
		console.log(newBook);
		return res
		.status(200)
		.json({
			message: 'New book created successfully',
			newBook
		});
	} catch (err) {
		return res.status(400).json({
			message: 'Whoopsi, we could not create your book',
			error: err
		})
	}

};

exports.getAllBooks = async(req, res) => {
	try {
		//let books = req.query 
		//? await db.Book.find(req.query).sort({publishDate:1}).select({name: 1, author: 1, publishDate: 1})
		//: await db.Book.find()
		let books = req.query
		if (req.query) {
			if (req.query.author) {
				books = await db.Book.find(req.query).sort({publishDate:1}).select({name: 1, author: 1, publishDate: 1});
			} else {
				books = await db.Book.find(req.query);
			}
			
		} else {
			books = await db.Book.find()
		}

		return res.status(200).json(books);

	} catch (err) {
		return res.status(400).json({
			message: 'Oops could not find the books',
			error: err
		});
	}
};

exports.getOneBook = async(req, res) => {
	try {
		let thisBook = await db.Book.findById(req.params.id);
		return res.status(200).json(thisBook);
	} catch (err) {
		return res.status(400).json({
			message: 'Oops could not find the book',
			error: err
		});
	}
};

exports.updateOneBook = async(req, res) => {
	try {
		let bookToUpdate = await db.Book.findByIdAndUpdate(req.params.id, {
			$set: req.body
		},
		{
			new: true
		});
		return res.status(200).json(bookToUpdate);
	} catch (err) {
		return res.status(400).json({
			message: 'Oops could not update this book',
			error: err
		});
	}
};

exports.deleteOneBook = async(req, res) => {
	try {
		await db.Book.findByIdAndRemove(req.params.id);
		return res.status(200).json('deleted the book');
	} catch (err) {
		return res.status(400).json({
			message: 'Oops could not delete this book',
			error: err
		});
	}
};