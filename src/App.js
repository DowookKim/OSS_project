<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import ImageHover from './components/ImageHover';
import booklist from './booklist.json';
import './App.css';

=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./components/Book/Book";
import CreateBook from "./components/Book/CreateBook";
import EditBook from "./components/Book/EditBook";
import ShowBook from "./components/Book/ShowBook";
import Header from "./components/Common/Header";
import Home from "./components/Layout/Home";
>>>>>>> f35c0348cee6646be3e53a3cf32dfe0154b87aed
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
<<<<<<< HEAD
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
=======
      <header className="container">
        <div className="">
          <Header />
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/show-book" element={<ShowBook />} />
          </Routes>
          
        </div>
      </header>
>>>>>>> f35c0348cee6646be3e53a3cf32dfe0154b87aed
    </div>
  );
}

export default App;
