import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark,  handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md: w-2/3">
            <h3>Blogs: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={ handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;