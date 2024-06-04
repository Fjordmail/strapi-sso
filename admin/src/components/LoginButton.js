import React from 'react';

const LoginButton = () => {
	return (
		<button
			onClick={() => alert('Button Clicked!')}
			style={{
				padding: '10px',
				backgroundColor: '#4CAF50',
				color: 'white',
				border: 'none',
				borderRadius: '5px',
				cursor: 'pointer',
			}}
		>
			Custom Login Button
		</button>
	);
};

export default LoginButton;
