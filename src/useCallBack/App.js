import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import Navbar from './useCallBack/Navbar'

function App() {

  const [count,setCount] = useState(0)
  const [adjective,setAdejctive] = useState(0)
  
  const getAdjective = useCallback(() =>{
    return "another"
  },[])

  

  return (
    <div className="App">
      <Navbar adjective={"hey"} getAdjective={getAdjective}/>
      <h1>hey</h1>
      <h4>{count}</h4>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  );
}

export default App;
