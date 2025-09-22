import { useEffect, useState } from "react";

const Blogs = () => {
    const [Blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <>
            <div className="w-2/3"> 
                <p>blog :{Blogs.length}</p>
            </div>
        </>
    );
};
export default Blogs;