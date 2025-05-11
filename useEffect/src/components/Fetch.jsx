import React, { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);
  //   const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
        console.log(json);
      });
  }, []);

  function handleValue() {
    setValue(value + 1);
  }

  //   const valuchng = () => {
  //     setCount(count + 1);
  //   };

  if (posts.length > 0) {
    return (
      <>
        <div>All post </div>
        {posts.slice(0, 10).map((post) => {
          return <PostCard key={post.id} posts={post} />;
        })}

        {/* <button onClick={valuchng}>Add value</button> */}
        <button onClick={handleValue}>Add value</button>
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
