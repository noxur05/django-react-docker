import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api';


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({text: '', image: ''})
  const getColor = async () => {
    const response = await api.get('/example/');
    console.log("Response is", response.data)
    setData(response.data[0])
  };
  useEffect(() => {
    getColor();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {data?.text}
        <img src={data?.image} alt='no image'/>
      </p>
    </>
  )
}

export default App
