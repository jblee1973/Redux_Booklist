import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/booksActions";

const NewBookForm = props => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    e && e.preventDefault();
    props.addBook(inputs);
    props.handleToggleBookForm();
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      <label htmlFor="title">Title</label>
      <br />
      <input
        onChange={handleInputChange}
        name="title"
        type="text"
        placholder="title"
        value={inputs.title}
      />
      <br />
      <label htmlFor="author">Author</label>
      <br />
      <input
        onChange={handleInputChange}
        name="author"
        type="text"
        placholder="author"
        value={inputs.author}
      />
      <br />
      <label htmlFor="img">Cover Image URL</label>
      <br />
      <input
        onChange={handleInputChange}
        name="img"
        type="text"
        placholder="cover image url"
        value={inputs.imgs}
      />
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <input
        onChange={handleInputChange}
        name="description"
        type="textarea"
        placholder="short summary"
        value={inputs.description}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
      <button onClick={() => props.handleToggleBookForm()}>Cancel</button>
    </form>
  );
};

export default connect(
  undefined,
  { addBook }
)(NewBookForm);
