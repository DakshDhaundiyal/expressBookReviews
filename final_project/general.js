const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Task 10: Get all books using Promise callbacks
function getAllBooks() {
  axios.get(`${BASE_URL}/`)
    .then(response => {
      console.log('All Books:', response.data);
    })
    .catch(error => {
      console.error('Error fetching all books:', error.message);
    });
}

// Task 11: Get book details by ISBN using async/await
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    console.log(`Book with ISBN ${isbn}:`, response.data);
  } catch (error) {
    console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
  }
}

// Task 12: Get books by author using Promise callbacks
function getBooksByAuthor(author) {
  axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`)
    .then(response => {
      console.log(`Books by ${author}:`, response.data);
    })
    .catch(error => {
      console.error(`Error fetching books by ${author}:`, error.message);
    });
}

// Task 13: Get books by title using async/await
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    console.log(`Books with title ${title}:`, response.data);
  } catch (error) {
    console.error(`Error fetching books with title ${title}:`, error.message);
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
