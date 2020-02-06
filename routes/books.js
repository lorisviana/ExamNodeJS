const express = require('express');
const router = express.Router();
const handlersBooks = require('../handlers/books');


router.route('/')
.post(handlersBooks.createBook)
.get(handlersBooks.getAllBooks);

router.route('/:id')
.get(handlersBooks.getOneBook)
.put(handlersBooks.updateOneBook)
.delete(handlersBooks.deleteOneBook);

module.exports = router;
