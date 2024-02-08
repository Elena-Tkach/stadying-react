import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import { postss } from './consts';
import cl from './styles/App.module.css'
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";


function App() {
  const [posts, setPosts] = useState(postss);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchquery] = useState('');

 
  const sortedPosts = useMemo(() => {
    console.log('dfd')
    if (selectedSort) {
          return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
      }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
 
  return (
    <div className={cl.App}>
      
      <PostForm create={createPost} formTitle={'Добавить пост'} />
      <MyInput
        value={searchQuery}
        onChange= {e => setSearchquery(e.target.value)}
        placeholder="Поиск..."
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'subtitle', name: 'По описанию'},
        ]}
      />
      {sortedAndSearchedPosts.length
        ?  <PostList remove={removePost} posts={ sortedAndSearchedPosts} title={'Список постов'} />
        : <h1 style={{color: 'blue'}}>Постов больше нет</h1>
      }
     
    </div>
  );
}

export default App;
