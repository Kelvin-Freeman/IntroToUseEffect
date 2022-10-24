import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
 
  // useEffect takes two parameters
  // first: callback function
  // array of dependencies
  useEffect(() => {
    console.log("making request")
    // do any side effect operations
    fetch("https://jsonplaceholder.typicode.com/posts") 
    .then((res) => res.json())
    .then((json) => setPosts(json));
  }, []);

  console.log('HERE',posts);
  return (
    <div className="App">
      <h1>Intro to useEffect</h1>
      {posts.map((post, idx) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          </div>
      ))}
    </div>
  );
};

export default App;
