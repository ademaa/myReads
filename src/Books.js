import ReadsTitle from "./ReadsTitle";
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";

const Books = ({allBooks}) =>{
     return( <div className="app">
        <div className="list-books">
          <ReadsTitle />
          <div className="list-books-content">
            <div>     
           <BookShelf key={allBooks.id} allBooks={allBooks} /> 
            </div>
          </div>
          <div className="open-search">
          <Link to="/search">Add a book</Link>
          </div>
        </div>
    </div>)
}
export default Books;