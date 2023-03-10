import { useState, useEffect } from 'react'
import './App.css'
import Header from '../components/Header'
import Unicorns from '../components/Unicorns'
import Lands from '../components/Lands'


function App() {
  const [ethValue, setEthValue] = useState(0)
  const [rbwValue, setRbwValue] = useState(0)
  const [unimValue, setUnimValue] = useState(0)

  useEffect(() => {
    Promise.all([
      fetch("https://api.coingecko.com/api/v3/simple/price?ids=rainbow-token-2&vs_currencies=usd&precision=5"),
      fetch("https://api.coingecko.com/api/v3/simple/price?ids=unicorn-milk&vs_currencies=usd&precision=5"),
      fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&precision=2")
    ])
      .then(([resRbwValue, resUnimValue, resEthValue]) =>
        Promise.all([resRbwValue.json(), resUnimValue.json(), resEthValue.json()])
      )
      .then(([dataRbwValue, dataUnimValue, dataEthValue]) => {
        setRbwValue(dataRbwValue["rainbow-token-2"].usd);
        setUnimValue(dataUnimValue["unicorn-milk"].usd);
        setEthValue(dataEthValue.ethereum.usd);
      });
  }, []);

  return (
    <div className="App">
      <Header
        ethValue={ethValue}
        rbwValue={rbwValue}
        unimValue={unimValue}
      />
      <main>
        <Unicorns
          ethValue={ethValue}
          rbwValue={rbwValue}
          unimValue={unimValue}
        />
        <Lands
          ethValue={ethValue}
          rbwValue={rbwValue}
          unimValue={unimValue}
        />
      </main>
    </div>
  )
}

export default App
