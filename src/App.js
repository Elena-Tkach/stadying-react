import React, {  useState } from "react";
import PostList from "./components/PostList";
import { postss } from './consts';
import  './styles/App.css'
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";


function App() {
  const [posts, setPosts] = useState(postss);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
