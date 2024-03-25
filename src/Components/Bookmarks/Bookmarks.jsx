

import PropTypes  from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="1/3">
            <h2 className="text-3xl">Bookmarks Bologs:{bookmarks.length} </h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.Id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};
Bookmarks.PropTypes={
    bookmarks:PropTypes.array
}
export default Bookmarks;