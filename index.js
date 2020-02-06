const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const booksRoutes = require('./routes/books')


// Middlewares
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome to booksAPI !');
});

app.use('/api/books', booksRoutes);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});