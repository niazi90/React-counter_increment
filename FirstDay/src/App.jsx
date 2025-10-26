import { useState } from 'react'

import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>{count}</p>
      <Button title={"increment"} onClick={()=>{
        setCount(count+1);
      }}/>
      <Button title={"decremenet"} onClick={()=>{
        setCount(count-1);
      }} />
      <Button title={"Reset"} onClick={()=>{
        setCount(0);
      }} />
     
     
    </>
  )
}

export default App
