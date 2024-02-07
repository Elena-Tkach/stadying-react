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

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
 
  return (
    <div className={cl.App}>
      
      <PostForm create={createPost} formTitle={'Добавить пост'} />
      {posts.length
        ?  <PostList remove={removePost} posts={ posts} title={'Список постов'} />
        : <h1 style={{color: 'blue'}}>Постов больше нет</h1>
      }
     
    </div>
  );
}

export default App;
