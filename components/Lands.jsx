import React, { useState } from 'react';
import Conditional from './Conditional';
import '../src/App.css'

export default function Lands(props) {
	const [answer, setAnswer] = useState(false);
	const [value, setValue] = useState("0");

	const toggleAnswer = () => setAnswer(true);
	const toggleOff = () => setAnswer(false)

	let rbwCost = (50 * props.rbwValue) / props.ethValue
	let unimCost = (1000 * props.unimValue) / props.ethValue
	let deductions = (parseFloat(2.5) + parseFloat({value}.value)) / 100


	const tokensCost = () => {
		if (!isNaN(rbwCost)) {
		  document.getElementById("rbw-cost").value = rbwCost.toFixed(4) + " ETH";
		}
	
		if (!isNaN(unimCost)) {
		  document.getElementById("unim-cost").value = unimCost.toFixed(4) + " ETH";
		}
	};

	const computationLands = () => {
		let listPrice = parseFloat(document.getElementById("list-price-land").value);

		if (listPrice == "") listPrice = 0;
	
		const ethResult = listPrice - (listPrice * deductions)
		if (!isNaN(ethResult)) {
		  document.getElementById("outputEth1").value = ethResult.toFixed(5);
		}
	
		const usdResult = ethResult * props.ethValue
		if (!isNaN(usdResult)) {
		  document.getElementById("outputUsd1").value = usdResult.toFixed(2);
		}
		
	  };
	
	const finalComputationLands = () => {
		let listPrice = parseFloat(document.getElementById("list-price-land").value);
		let mintCost = parseFloat(document.getElementById("eth-cost").value);
		let keystoneCost = parseFloat(document.getElementById("keystone-cost").value);
		if (listPrice == "") listPrice = 0;
		if (mintCost == "") mintCost = 0;
		if (keystoneCost == "") keystoneCost = 0;
	
		let ethResult = listPrice - (listPrice * deductions)
		let vendingCosts = mintCost + keystoneCost
		let tokenCosts = rbwCost + unimCost
		let totalExpenses = vendingCosts + tokenCosts
		let finalEthResult = ethResult - totalExpenses

		if (!isNaN(finalEthResult)) {
			document.getElementById("outputEth1").value = finalEthResult.toFixed(5);
		  }
	  
		const usdResult = finalEthResult * props.ethValue
		if (!isNaN(usdResult)) {
			document.getElementById("outputUsd1").value = usdResult.toFixed(2);
		}
	};
	
	

	return (
		<div className="section-container">
			<h2>Lands</h2>
			<div>
				<label htmlFor="list-price-land" className="card-title">List Price (in ETH):</label>
				<input type="number" name="list-price-land" id="list-price-land" min="0" onKeyUp={answer===false ? computationLands : finalComputationLands} />
			</div>
			<div>
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
					onMouseUp={answer===false ? computationLands : finalComputationLands}
				/>
				<output className="fee" name="fee-land" htmlFor="service-fee">{value}%</output>
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
				handleKeyUp={finalComputationLands}
				handleChange={computationLands}
			/>

			<div>
				<p className="card-title">Profit (ETH):</p>
				<output name="result-eth" htmlFor="list-price-land service-fee creator-earnings" id="outputEth1">0</output>
			</div>
			<div>
				<p className="card-title">Profit (USD)</p>
				<output name="result-usd" htmlFor="result-eth" id="outputUsd1">0</output>
			</div>
		</div>
	)
	
}