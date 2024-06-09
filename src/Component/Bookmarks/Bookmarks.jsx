import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-300 m-10 pt-5">
            <div>
                <h3 className="text-3xl text-center text-purple-800">Reading time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center font-semibold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;