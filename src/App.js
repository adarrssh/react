import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0)
  const [adjective,setAdejctive] = useState(0)
  
  const getAdjective = useCallback(() =>{
    return "another"
  },[])

  

  return (
    <div className="App">
      <h1>hey</h1>
      <h4>{count}</h4>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  );
}

export default App;
