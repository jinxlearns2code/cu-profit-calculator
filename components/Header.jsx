import React from 'react';

export default function Header(props) {
	return (
		<nav>
			<img src="images/website-logo.png" alt="website-logo" className="logo" />
			<div className="ticker">
				<p>ETH/USDC</p>
				<div>{props.ethValue}</div>
			</div>
		</nav>
	)
}