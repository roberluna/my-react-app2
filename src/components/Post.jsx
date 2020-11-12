import React, {useState, useEffect} from 'react'

const Post = () => {

 const [posts, setPosts] = useState([])

 useEffect(() =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => setPosts(res) )
  );

    return (
        <div>
             {/* {JSON.stringify(posts)}  */}

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Post
