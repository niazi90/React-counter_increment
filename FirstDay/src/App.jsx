import { useState } from 'react'

import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>{count}</p>
      <Button onClick={()=>{
        setCount(count+1);
      }}/>
    </>
  )
}

export default App
