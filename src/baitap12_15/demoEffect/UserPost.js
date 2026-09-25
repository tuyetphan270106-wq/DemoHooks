import React, { useEffect, useState } from 'react'

function UserPost({ userId }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const data = await reponse.json();
      setPosts(data);
    };
    fetchData();
  }, [userId]);
  return (
    <div>
      <h2>Posts of User {userId}</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default UserPost
