import React, { useState } from "react";
import PostList from "./components/PostList";
import { postss } from './consts';
import cl from './styles/App.module.css'




function App() {
   const [posts, setPosts] = useState(postss);
 
  return (
    <div className={cl.App}>
      <PostList posts={ posts} title={'Список постов'} />
    </div>
  );
}

export default App;
