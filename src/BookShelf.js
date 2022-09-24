import BooksList from "./BooksList";
import { getAll, update } from "./BooksAPI";
import { useState,useEffect } from "react";


const BookShelf = ({allBooks}) =>{
const [bookshlef,setBookShelf]= useState('');
const [flip,setFlip] = useState(false);

  const changeShelf = (book,shelf) =>{
    const upShelf = async () =>{
      await update(book,shelf);
      setBookShelf(shelf)
    }
    upShelf();
    setFlip(!flip);
  }

    const Curr = allBooks.filter(a => a.shelf === "currentlyReading");
    const wantRead = allBooks.filter(a => a.shelf === "wantToRead");
    const read = allBooks.filter(a => a.shelf === "read");
  
    return (
       <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            Curr.map(b => <BooksList key={b.id} shelfType={b.shelf} allBooks={b} onUpdateShelf={changeShelf} />)
          }
          </ol>
        </div>
      </div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            wantRead.map(b => <BooksList key={b.id} shelfType={b.shelf} allBooks={b} onUpdateShelf={changeShelf} />)
          }
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            read.map(b => <BooksList key={b.id} shelfType={b.shelf} allBooks={b} onUpdateShelf={changeShelf} />)
          }
          </ol>
        </div>
      </div>  
      </div>
      
    )
}
export default BookShelf;