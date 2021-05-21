import React from 'react';
import {Link} from 'react-router-dom';

const MainHeader = () => {
	return (
		<div className={`main-header`}>
			<Link to="/" className="logo" title="KONER Software Solutions">
				<img src={'src/assets/images/logo.svg'}/>
			</Link>
		</div>
	);
}

export default MainHeader;
