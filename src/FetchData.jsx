// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchData() {

    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(error => console.log(error)) 
    }, [id])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button ></button>
            <div>{posts.title}</div>
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default FetchData
