import React from 'react';
import PostItem from './PostItem';
import cl from '../styles/App.module.css';

const PostList = ({ posts, title }) => {
	console.log(posts);
	return (
		<>
			<h1 style={{ marginBottom: '50px' }}>{title}</h1>
			<ul className={cl.list}>
			{posts.map((post) =>
				<PostItem post={post} key={post.id} />
				)}
			</ul>
		</>
	);
};

export default PostList;