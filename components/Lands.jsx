import React from 'react';


export default function Lands(props) {
	
	return (
		<div className="section-container">
			<h2>Lands</h2>
			<label htmlFor="list-price" className="card-title">List Price:</label>
			<input type="number" name="list-price" id="list-price" />
			<p className="card-title">Service Fee:</p>
			<p id="service-fee">2.5%</p>
			<p className="card-title">Creator Earnings:</p>
			<p id="creator-earnings">2.5%</p>
			<p className="card-title">Profit (ETH):</p>
			<output name="result-eth" htmlFor="list-price service-fee creator-earnings">
				0
			</output>
			<p className="card-title">Profit (USDC)</p>
			<output name="result-usdc" htmlFor="result-eth">
				0
			</output>
			
		</div>
	)
}