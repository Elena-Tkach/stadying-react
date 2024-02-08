import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import { postss } from './consts';
import cl from './styles/App.module.css'
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import PostFilter from "./components/PostFilter";


function App() {
  const [posts, setPosts] = useState(postss);
  const [filter, setFilter] = useState({ sort: '', query: '' });

 
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
          return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
      }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className={cl.App}>
      
      <PostForm create={createPost} formTitle={'Добавить пост'} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={ sortedAndSearchedPosts} title={'Список постов'} />
     
    </div>
  );
}

export default App;
