import React from 'react';
import MyButton from '../UI/button/MyButton';
import cl from '../styles/App.module.css';


const PostItem = (props) => {
  
	return (
		 <li className={cl.post}>
        <div className={cl.post__content}>
				<h3>{props.number}. {props.post.title}</h3>
				<p>{props.post.subtitle}</p>
        </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
     </li>
	);
};

export default PostItem;