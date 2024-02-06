import React from 'react';
import cl from '../styles/App.module.css';


const PostItem = (props) => {
	
	return (
		 <li className={cl.post}>
        <div className={cl.post__content}>
				<h3>{props.post.id}. {props.post.title}</h3>
				<p>{props.post.subtitle}</p>
        </div>
        <div className="post__btns">
          <button className={cl.button}>Удалить</button>
        </div>
     </li>
	);
};

export default PostItem;