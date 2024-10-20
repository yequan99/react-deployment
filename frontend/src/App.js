import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('Loading...')
  const callAPI = async () => {
    try {
      const res = await fetch('react.127.0.0.1.nip.io')
      console.log("response: ", res)
      const data = await res.json()
      console.log("made get request: ", data)
      setData(data)
    } catch (error) {
      console.log('RESP1 error', error)
    }
  }

  useEffect(() => {
    callAPI()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello from {data}
        </a>
      </header>
    </div>
  );
}

export default App;
