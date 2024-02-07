import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
	return (
		<>
			<button {...props} className={cl.button}>{children}</button>
		</>
	);
};

export default MyButton;