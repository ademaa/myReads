import {Link} from "react-router-dom";
import BooksList from "./BooksList";
import { useState } from "react";

const SearchBook = ({allBooks,onChangeSearch}) =>{
  const [query,setQuery] = useState('');
 

  //filter with books that matches the query in the serch bar and convert to lowercase to match
  const listBooks = allBooks.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
 

  //on entering somthing collect the value and add the setQuery
  const handelChange = (q) =>{
    setQuery(q);
    onChangeSearch(query);
  }

 return (
    <div className="search-books">
    <div className="search-books-bar">
    <Link to="/" className="close-search">close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={(e) => handelChange(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        { query === "" ? (
          ''
        ):(listBooks.map(book =>(<BooksList key={book.id} allBooks={book}/>)))
        }
      </ol>
    </div>
  </div>
)}
export default SearchBook;