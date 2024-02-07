import React, { useState } from "react";
import PostList from "./components/PostList";
import { postss } from './consts';
import cl from './styles/App.module.css'
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState(postss);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
 
  return (
    <div className={cl.App}>
      
      <PostForm create={createPost} formTitle={'Добавить пост'} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'subtitle', name: 'По описанию'},
        ]}
      />
      {posts.length
        ?  <PostList remove={removePost} posts={ posts} title={'Список постов'} />
        : <h1 style={{color: 'blue'}}>Постов больше нет</h1>
      }
     
    </div>
  );
}

export default App;
