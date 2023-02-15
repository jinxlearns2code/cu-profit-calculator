import { useState, useEffect } from 'react'
import './App.css'
import Header from '../components/Header'
import Unicorns from '../components/Unicorns'
import Lands from '../components/Lands'


function App() {
  const [ethValue, setEthValue] = useState(0)

  useEffect(() => {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USDC")
        .then(res => res.json())
        .then(data => setEthValue(data.USDC))
  }, [])

  const computationUnicorns = () => {
    let listPrice = document.getElementById("list-price").value;
    let deductions = .05
    if (listPrice == "") listPrice = 0;

    const ethResult = listPrice - (listPrice * deductions)
    if (!isNaN(ethResult)) {
      document.getElementById("outputEth").value = ethResult;
    }

    const usdcResult = ethResult * ethValue
    if (!isNaN(usdcResult)) {
      document.getElementById("outputUsdc").value = usdcResult;
    }
  };

  return (
    <div className="App">
      <Header
        ethValue={ethValue}
      />
      <main>
        <Unicorns
          handleKeyUp={computationUnicorns}
        />
        <Lands
          
        />
      </main>
    </div>
  )
}

export default App
