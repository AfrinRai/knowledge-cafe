import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md: w-1/3 bg-gray-300 ml-6 mt-[87px] pt-4">
            <div>
                <h3 className='text-4xl text-center'>Reading time: {readingTime}</h3>
            </div>
            <h4 className="text-xl text-center">Bookmarks: {bookmarks.length}</h4>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;