import React from 'react'; 
import PropTypes from 'prop-types';
import Book from './Book.js';

function Turn({author, books, highlight, onAnswerSelected}) {
  const highlightToBgColor = (highlight) => {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    }

    return mapping[highlight];
  }

  return(
    <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl}  className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
          {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
        </div>
    </div>
  )
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func,
  highlight: PropTypes.string.isRequired,

}

export default Turn;