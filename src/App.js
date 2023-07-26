import React, { useState, useEffect } from "react";
import BookList from "./component/BookList";
import Spinner from "./component/Spinner";

//Using Hoc on BookList
const BookListWithLoading = Spinner(BookList);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async book data fetch
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      <h1 style={{textAlign: "center"}}>Book List</h1>
      <hr />
      <BookListWithLoading isLoading={isLoading} />
    </div>
  );
};

export default App;
