import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3">
      <h1>Reading Time: {readingTime}</h1>
      <h1 className="text-2xl">Bookmarks: {bookmarks.length}</h1>

      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
