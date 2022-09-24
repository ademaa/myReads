const BooksList = ({allBooks,onUpdateShelf}) =>{
    const getShelf = (e) =>{
      onUpdateShelf(allBooks,e.target.value);
    }

    return(
      <li key={allBooks.id}>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:`url(${allBooks.imageLinks.smallThumbnail
})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={getShelf} >
            <option value="none">
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option  value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{allBooks.title}</div>
      <div className="book-authors">{allBooks.authors}</div>
    </div>
  </li>
)}
export default BooksList;