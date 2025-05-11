import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  //   const [count, setCount] = useState(0);
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  async function fetchPosts() {
    const Response = await fetch(API_URL);
    const data = await Response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts.length > 0) {
    return (
      <>
        <div>All post </div>
        <Link to={"/"}>Home</Link>
        {/* //alternative to <a href="/">Home</a> and <Link to={"/about"}>About</Link> it reduce the page reload */}
        {posts.slice(0, 10).map((post) => {
          return <PostCard key={post.id} posts={post} />;
        })}

        {/* <button onClick={valuchng}>Add value</button> */}
      </>
    );
  }

  return <>{posts && <h2>Loading..</h2>}</>;
}

function PostCard({ posts }) {
  return (
    <div>
      <h4>{posts.id}</h4>
      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
      <p>{posts.userId}</p>
    </div>
  );
}
