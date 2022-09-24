import "./App.css";
import Books from "./Books";
import * as BooksAPI from "./BooksAPI";
import { useState,useEffect } from "react";
import {Routes,Route} from "react-router-dom";
import SearchBook from "./SearchBook";


const  App = () => {
  const [allBooks,setallBooks] = useState([]);
  
  const searchBook =(query)=>{
    const serach = async ()=>{
       await BooksAPI.search(query,30);
       }
    serach();
  }


  useEffect(()=>{
    const books = async ()=>{
      const res = await BooksAPI.getAll();
      setallBooks(res);
    }
    books();
  },[]);
  
  return (
    <Routes>
      <Route exact path="/" element={<Books allBooks={allBooks}/>} />
      <Route path="/search" element={<SearchBook  allBooks={allBooks} onChangeSearch={(query)=>{searchBook()}} />} />
    </Routes>
  );
}

export default App;
