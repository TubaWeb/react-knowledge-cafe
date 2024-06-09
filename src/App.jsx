import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
