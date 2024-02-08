import React from 'react';
import PostItem from './PostItem';
import  '../styles/App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
	if (!posts.length) {
		return (<h1 style={{color: 'blue'}}>Постов больше нет</h1>)
	}

	return (
		<>
			<h1 style={{ marginBottom: '50px' }}>{title}</h1>
			<ul className='list'>
				<TransitionGroup>
					{posts.map((post, index) =>
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames='post'
						>
							<PostItem remove={remove} number={index + 1} post={post}  />	
						</CSSTransition>
						
					)}
				</TransitionGroup>
			</ul>
		</>
	);
};

export default PostList;