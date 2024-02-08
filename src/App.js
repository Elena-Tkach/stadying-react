import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import { postss } from './consts';
import  './styles/App.css'
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";


function App() {
  const [posts, setPosts] = useState(postss);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
 
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
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <MyButton style={{ marginBottom: '20px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      
      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} formTitle={'Добавить пост'} />
      </MyModal>
   
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={ sortedAndSearchedPosts} title={'Список постов'} />
     
    </div>
  );
}

export default App;
