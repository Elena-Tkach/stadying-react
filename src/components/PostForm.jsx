import React, { useState } from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";


const PostForm = ({ formTitle, create }) => {
	const [post, setPost] = useState({ title: '', subtitle: '' });

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		};
		create(newPost);
		setPost({ title: '', subtitle: '' });
	}
	return (
		<>
			<h2 style={{ marginBottom: '20px' }}>{formTitle}</h2>
			
			<form style={{marginBottom: '60px'}}>
			<fieldset style={{border: 'none'}}>
					<MyInput 
						value={post.title}
						onChange={e => setPost({ ...post, title: e.target.value })}
				      type="text" 
						placeholder="Заголовок статьи" 
				   />
					<MyInput 
					   value={post.subtitle}
						onChange={e => setPost({ ...post, subtitle: e.target.value })}
						type="text" 
						placeholder="Описание статьи"	
					/>
			</fieldset>
			<MyButton onClick={addNewPost}>Добавить</MyButton>
			</form>
		</>
	);
};

export default PostForm;