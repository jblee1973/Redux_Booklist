import React, { Component } from "react";
import BookList from "./BookList";
import BookInfo from "./BookInfo";

class App extends Component {
  render() {
    return (
      <main className="book-container">
        <BookList />
        <BookInfo />
      </main>
    );
  }
}

export default App;
