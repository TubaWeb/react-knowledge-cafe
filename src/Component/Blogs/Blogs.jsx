import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(rse => rse.json())
        .then(data => setBlogs(data))
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default Blogs;