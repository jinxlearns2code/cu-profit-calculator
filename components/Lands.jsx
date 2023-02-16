import React, { useState } from 'react';
import Conditional from './Conditional';
import '../src/App.css'

export default function Lands(props) {
	const [answer, setAnswer] = useState(false);
	const toggleAnswer = () => setAnswer(true);
	const toggleOff = () => setAnswer(false)
  
	const tokensCost = () => {
		let rbwCost = (50 * props.rbwValue) / props.ethValue
		let unimCost = (1000 * props.unimValue) / props.ethValue
	
		if (!isNaN(rbwCost)) {
		  document.getElementById("rbw-cost").value = rbwCost.toFixed(4) + " ETH";
		}
	
		if (!isNaN(unimCost)) {
		  document.getElementById("unim-cost").value = unimCost.toFixed(4) + " ETH";
		}
	};
	
	const computationLands = () => {
		let listPrice = document.getElementById("list-price-land").value;
		let deductions = .05
		if (listPrice == "") listPrice = 0;
	
		const ethResult = listPrice - (listPrice * deductions)
		if (!isNaN(ethResult)) {
		  document.getElementById("outputEth").value = ethResult;
		}
	
		const usdResult = ethResult * ethValue
		if (!isNaN(usdResult)) {
		  document.getElementById("outputUsd").value = usdResult;
		}
	  };


	return (
		<div className="section-container">
			<h2>Lands</h2>
			<div>
				<label htmlFor="list-price-land" className="card-title">List Price (in ETH):</label>
				<input type="number" name="list-price-land" id="list-price-land" />
			</div>
			<div>
				<p className="card-title">Service Fee:</p>
				<p id="service-fee">2.5%</p>
			</div>
			<div>
				<p className="card-title">Creator Earnings:</p>
				<p id="creator-earnings">2.5%</p>
			</div>
			
			<Conditional
				handleClick={tokensCost}
				toggleOn={toggleAnswer}
				toggleOff={toggleOff}
				answer={answer}
			/>

			<div>
				<p className="card-title">Profit (ETH):</p>
				<output name="result-eth" htmlFor="list-price service-fee creator-earnings">0</output>
			</div>
			<div>
				<p className="card-title">Profit (USD)</p>
				<output name="result-usd" htmlFor="result-eth">0</output>
			</div>
			
		</div>
	)
}