import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import ImageHover from './components/ImageHover';
import booklist from './booklist.json';
import './App.css';

function App() {
  const [books, setBooks] = useState(booklist.item);  // Use booklist data
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <ImageHover />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.isbn} className="book-item">
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <a href={book.link}>More details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
