import React from 'react'
import BookItem from './BookItem';

const booksData = [
    { title: "Book 1", author: "Author 1", price: 25, img: 'https://m.media-amazon.com/images/I/51RJP7hNpVL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg' },
    { title: "Book 2", author: "Author 2", price: 30, img: 'https://m.media-amazon.com/images/I/51spSem0HWL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg' },
    { title: "Book 3", author: "Author 3", price: 40, img: 'https://m.media-amazon.com/images/I/41NMKTwTdcL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg' },

  ];

const BookList = () => {
    return (
      <div>
        {booksData.map((book, index) => (
          <BookItem
            key={index}
            title={book.title}
            author={book.author}
            price={book.price}
            image={book.img}
          />
        ))}
      </div>
    );
  };

export default BookList
