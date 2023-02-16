import React from 'react';


export default function Unicorns(props) {

	const computationUnicorns = () => {
		let listPrice = parseFloat(document.getElementById("list-price").value);
		let deductions = .05
		if (listPrice == "") listPrice = 0;
	
		const ethResult = listPrice - (listPrice * deductions)
		if (!isNaN(ethResult)) {
		  document.getElementById("outputEth").value = ethResult;
		}
	
		const usdResult = ethResult * props.ethValue
		if (!isNaN(usdResult)) {
		  document.getElementById("outputUsd").value = usdResult;
		}
	  };
	
	return (
		<div className="section-container">
			<h2>Unicorns</h2>
			<label htmlFor="list-price" className="card-title">List Price (in ETH):</label>
			<input type="number" name="list-price" id="list-price" onKeyUp={computationUnicorns} />
			<p className="card-title">Service Fee:</p>
			<p id="service-fee">2.5%</p>
			<p className="card-title">Creator Earnings:</p>
			<p id="creator-earnings">2.5%</p>
			<p className="card-title">Profit (ETH):</p>
			<output name="result-eth" htmlFor="list-price service-fee creator-earnings" id="outputEth">
				0
			</output>
			<p className="card-title">Profit (USD)</p>
			<output name="result-usd" htmlFor="result-eth" id="outputUsd">
				0
			</output>
		</div>
	)
}