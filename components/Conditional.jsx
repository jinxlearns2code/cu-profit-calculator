import React from 'react';
import '../src/App.css';


export default function Conditional(props) {
	
	return (
		<>
		<fieldset>
			<legend>Was the land vended?</legend>
			<div>
				<input
						type="radio"
						id="vend-yes"
						name="option"
						value="true"
						onClick={props.toggleOn}
				/>
     	 		<label htmlFor="vend-yes">Yes</label>
			</div>
			<div>
				<input	
					type="radio"
					id="vend-no"
					name="option"
					value="false"
					onClick={props.toggleOff}
				/>
      			<label htmlFor="vend-no">No</label>
			</div>
		</fieldset>
		{props.answer && 
			<div>
				<label htmlFor="eth-cost" className="card-title">Mint Cost (in ETH):</label>
				<input type="number" name="eth-cost" id="eth-cost" onClick={props.handleClick} onKeyDown={props.handleClick} />
			</div>
		}
		{props.answer &&
			<div>
				<label htmlFor="keystone-cost" className="card-title">Keystone Cost (in ETH):</label>
				<input type="number" name="keystone-cost" id="keystone-cost" />
			</div>
			}
		{props.answer &&
			<div>
				<p className="card-title">RBW Cost:</p>
					<p className="tokens-cost">50 RBW = <output id="rbw-cost"></output></p>
			</div>		
		}
		{props.answer &&
			<div>
				<p className="card-title">UNIM Cost:</p>
				<p className="tokens-cost">1000 UNIM = <output id="unim-cost"></output></p>
			</div>		
		}		
	  </>
	);
}