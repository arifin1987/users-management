import { useState } from "react";
import Blogs from "../../components/Blogs/Blogs";
import Bookmarks from "../../components/Bookmarks/Bookmarks";

const Home = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  const handleMarkAsRead = (time, id) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    const remaining = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaining);
  };
  return (
    <div className="flex gap-8">
      <Blogs
        handleAddBookmark={handleAddBookmark}
        handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
  );
};

export default Home;
