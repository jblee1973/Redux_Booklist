import React from "react";
import { connect } from "react-redux";

const BookInfo = ({ selectedBook }) => {
  // Loose check if given url is a valid img url
  // https://stackoverflow.com/questions/9714525/javascript-image-url-verify
  const isValidImgUrl = img => {
    return img.toLowerCase().match(/[^/]+(jpg|png|gif)$/) !== null;
  };

  // Use placeholder image if invalid image url because
  // I want the click handler on the image and we need something bigger to click
  const img =
    selectedBook && isValidImgUrl(selectedBook.img)
      ? selectedBook.img
      : "https://www.zumlume.com/assets/frontend/images/default-book.png";

  return (
    <div className="book-info-container">
      {selectedBook ? (
        <>
          <h2>{selectedBook.title}</h2>
          <div className="book-info">
            <img src={img} alt={selectedBook.title} />
            <div>
              By {selectedBook.author}
              <hr />
              <p>{selectedBook.description}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook
  };
};

export default connect(mapStateToProps)(BookInfo);
