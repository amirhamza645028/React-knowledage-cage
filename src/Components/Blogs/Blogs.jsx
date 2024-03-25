import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handelarAddBookmarks}) => {
    const [blogs,setBlogs]=useState([])
        useEffect(()=>{
            fetch('blogs.json')
            .then(res=>res.json())
            .then(data=>setBlogs(data))

        },[])
    return (
        <div className="md:w-2/3">
            <h1>Blogs:{blogs.length}</h1>
            {
                blogs.map(item =>
                <Blog key={item.ID} 
                      blog={item}
                      handelarAddBookmarks={handelarAddBookmarks}>
                </Blog>)
            }
        </div>
    );
};
Blogs.prototype={
    handelarAddBookmarks:PropTypes.func
}
export default Blogs;