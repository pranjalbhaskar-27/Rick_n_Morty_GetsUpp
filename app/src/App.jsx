import { useState, useEffect, useRef } from 'react'
// import logo from './logo.svg'
import './App.css'
import axios from 'axios';
import { useCallback } from 'react';
import BasicUserCard from './components/BasicUserCard';
import ModalCard from './components/ModalCard';
function App() {
  const [sdata, setSdata] = useState([])
  const [popdisp,setPopdisp]=useState([])
  const [mountModal, setMountModal] = useState(false)
  const [page,setPage]=useState(1)  

  useEffect(()=>{
        
    const charRandom=()=>{
            axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`).then(({data})=>{
                
                console.log(data.results)
                setSdata(data.results)
            })
        }
        charRandom()
    }, [])


    const observer=useRef()
    useEffect(()=>{

    })
  //addded debouncing
  const debounce=(debo)=>{

    let ticktock;
    return function (...spread){
      const context = this;
      if(ticktock){
        clearTimeout(ticktock)
      }
      ticktock=setTimeout(()=>{
        ticktock=null
        debo.apply(context,spread)
      }, 500)
    }
  }

  //fetching display details from API
  const handleChange=(event)=>{
    const {value}=event.target;
    axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`).then(({data})=>{console.log(data.results,value)
     setSdata(data.results) }).catch(err =>console.log(err))
  }


  //toggle Modal
  const displayPop=(selContact)=>{
    console.log(selContact.name)
    setPopdisp(selContact)
    setMountModal(!mountModal)
  }

  
  
  //memoized callback
  const debounced=useCallback(debounce(handleChange), [])

  return (
    <div className="App">
      <h2>Rick and Morty Search!</h2>
      <input type="text" name="search" className="searchInput" id='iconified' placeholder='&#xF002; do you wanna devlop an app?' onChange={debounced} />
      <BasicUserCard sdata={sdata} displayPop={displayPop}/>
      <ModalCard mountModal={mountModal} popdisp={popdisp} displayPop={displayPop} />
      {}
    </div>
  )
}

export default App
