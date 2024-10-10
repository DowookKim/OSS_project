import { Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./components/Book/Book";
import CreateBook from "./components/Book/CreateBook";
import EditBook from "./components/Book/EditBook";
import ShowBook from "./components/Book/ShowBook";
import Header from "./components/Common/Header";
import Home from "./components/Layout/Home";



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
