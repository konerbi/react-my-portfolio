import React from 'react';

interface TSlogoProps {
	size: string;
}

const TSlogo = (props: TSlogoProps) => {
	const logoStyle = {
		width: props.size,
		height: props.size
	};
	const imgStyle = {
		width: '100%',
		height: '100%'
	}
	return (
		<div style={logoStyle}>
			<img style={imgStyle} src={`src/assets/images/typescript.svg`}/>
		</div>
	);
}

export default TSlogo;
