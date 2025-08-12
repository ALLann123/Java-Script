import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Card=({title})=>{
  const [count, setCount]=useState(0);

  const [hasliked, setHasLiked]=useState(false);

  useEffect(()=>{
    console.log(`${title} has been liked: ${hasliked}`);
  }, [hasliked]);

  return (
    <div className='card' onClick={()=>setCount(count+1)}>
      <h2>Movie Today: {title}<br/>{count}</h2>
      <button onClick={()=>setHasLiked(!hasliked)}>
        {hasliked?'❤️':'🤍'}
      </button>

    </div>
  )
}

const App=()=>{

  return (
    <div className='card-container'>
      <Card title="Starwars"/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>

    </div>
  )
}

export default App