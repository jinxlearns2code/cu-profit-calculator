import React, { useState } from 'react';


export default function Unicorns(props) {
	const [value, setValue] = useState("0");
	let deductions = (parseFloat(2.5) + parseFloat({value}.value)) / 100

	const computationUnicorns = () => {
		let listPrice = parseFloat(document.getElementById("list-price").value);
		if (listPrice == "") listPrice = 0;
	
		const ethResult = listPrice - (listPrice * deductions)
		if (!isNaN(ethResult)) {
		  document.getElementById("outputEth").value = ethResult.toFixed(5);
		}
	
		const usdResult = ethResult * props.ethValue
		if (!isNaN(usdResult)) {
		  document.getElementById("outputUsd").value = usdResult.toFixed(2);
		}
	  };
	
	return (
		<div className="section-container">
			<h2>Unicorns</h2>
			<label htmlFor="list-price" className="card-title">List Price (in ETH):</label>
			<input type="number" name="list-price" id="list-price" onKeyUp={computationUnicorns} />
			<p className="card-title">Service Fee:</p>
			<input
					type="range"
					className="service-fee"
					name="service-fee"
					min="0"
					max="2.5"
					defaultValue="0"
					step="0.5"
					onChange={(e) => setValue(e.target.value)}
					onMouseUp={computationUnicorns}
				/>
				<output className="fee" name="fee-unicorn" htmlFor="service-fee">{value}%</output>
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