import React from 'react';

interface TSlogoProps {
	size?: string;
}

const TSlogo = (props: TSlogoProps) => {
	const logoStyle = {
		width: props.size ? props.size : '3rem',
		height: props.size ? props.size : '3rem',
	};
	const imgStyle = {
		width: '88%',
		height: '88%'
	}
	return (
		<div style={logoStyle}>
			<img style={imgStyle} src={`src/assets/images/typescript.svg`}/>
		</div>
	);
}

export default TSlogo;
