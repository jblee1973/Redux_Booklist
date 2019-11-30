import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/selectedBookActions";
import { setBooks, removeBook } from "../actions/booksActions";
import booksData from "../books";
import NewBookForm from "./NewBookForm";

const BookList = props => {
  // State for toggling book form
  const [shouldShowBookForm, toggleShowBookForm] = useState(false);
  const { books, selectBook, setBooks, removeBook } = props;

  // componentDidMount
  useEffect(() => {
    // Pretend we fetched it instead of importing
    // fetch(URL)
    // .then(res => res.json())
    // .then(books => this.props.getBooks(books))
    setBooks(booksData);
  }, []);

  const handleToggleBookForm = () => {
    toggleShowBookForm(!shouldShowBookForm);
  };

  const handleRemoveBook = (e, book) => {
    e.stopPropagation();
    removeBook(book);
  };

  return (
    <div className="book-list">
      {books.map((book, i) => (
        <div
          onClick={() => selectBook(book)}
          key={i}
          className="book-list-item"
          book={book}
        >
          <span className="title">{book.title}</span>
          <button onClick={e => handleRemoveBook(e, book)} className="delete">
            X
          </button>
        </div>
      ))}
      {shouldShowBookForm ? (
        <NewBookForm handleToggleBookForm={handleToggleBookForm} />
      ) : (
        <div onClick={handleToggleBookForm} className="book-list-item new">
          + Add New Book
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(
  mapStateToProps,
  { selectBook, setBooks, removeBook }
)(BookList);
