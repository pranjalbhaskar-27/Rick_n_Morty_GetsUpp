import { useState, useEffect } from 'react'
// import logo from './logo.svg'
import './App.css'
import axios from 'axios';
import { useCallback } from 'react';

function App() {
  const [sdata, setSdata] = useState([])

  const debounce=(debo)=>{
    let ticktock;
    return function (...args){
      const context = this;
      if(ticktock){
        clearTimeout(ticktock)
      }
      ticktock=setTimeout(()=>{
        ticktock=null
        debo.apply(context,args)
      }, 500)
    }
  }

  const handleChange=(event)=>{
    const {value}=event.target;

    axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`).then(({data})=>{console.log(data.results,value)
     setSdata(data.results) }).catch(err =>console.log(err))
  }
  

  //memoized cllbac
  const debounced=useCallback(debounce(handleChange), [])

  return (
    <div className="App">
      <h3>Rick!</h3>
      <input type="text" name="search" id="searchInput" placeholder='omnomnom,.' onChange={debounced} />
      {sdata?.length>0 && 
        <div className='autoBox'>
          {sdata?.map((e,i)=>
          <div key={i} className='autoDisp'>{e.name}</div>)}
        </div>}
    </div>
  )
}

export default App
