import React, { useState } from "react";
import PostList from "./components/PostList";
import { postss } from './consts';
import cl from './styles/App.module.css'
import PostForm from "./components/PostForm";




function App() {
  const [posts, setPosts] = useState(postss);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
 
  return (
    <div className={cl.App}>
      <PostForm formTitle={ 'Добавить пост'} create={createPost} />
      <PostList posts={ posts} title={'Список постов'} />
    </div>
  );
}

export default App;
