// import { useMemo, useState } from 'react';
// import './App.css';

// const nums = new Array(30_000_000).fill(0).map((_,i)=>{
//   return{
//     index : i,
//     isMagical : i === 29900009
//   }
// })

// function App() {
  
//   const [count,setCount] = useState(0)
//   const [numbers,setNumbers] = useState(nums)
  
//   const magical = useMemo(()=> numbers.find(item=>item.isMagical === true),[])
//   return (
//     <div className="App">
//       <span>Magical number {magical.index}</span>
//       <h1>hey</h1>
//       <h4>{count}</h4>
//       <button onClick={()=>setCount(count+1)}>click</button>
//     </div>
//   );
// }

// export default App;
