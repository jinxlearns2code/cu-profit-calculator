import React from 'react';

export default function Header(props) {
	return (
		<nav>
			<img src="images/website-logo.png" alt="website-logo" className="logo" />
			<div id="ticker-container">
				<div className="ticker">
					<p>RBW/USD</p>
					<div>{props.rbwValue}</div>
				</div>
				<div className="ticker">
					<p>UNIM/USD</p>
					<div>{props.unimValue}</div>
				</div>
				<div className="ticker">
					<p>ETH/USD</p>
					<div>{props.ethValue}</div>
				</div>
				</div>
		</nav>
	)
}