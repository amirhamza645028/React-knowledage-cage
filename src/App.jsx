import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Header from "./Components/Header/Header"
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handelarAddBookmarks= bolog =>{
    const newBookmarks = [...bookmarks,bolog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      
      <Header></Header>
      <div className="md:flex ">
      <Blogs handelarAddBookmarks={handelarAddBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App

