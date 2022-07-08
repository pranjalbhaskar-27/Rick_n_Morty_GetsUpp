import React from 'react'
import ModalCard from './ModalCard'
export default function BasicUserCard(props) {
  // console.log(props.sdata[0],'data')
  return (
    <div>
      {props.sdata?.length>0 && 
            <div className='autoBox'>
            {props.sdata?.map((e,i)=>
            <div key={i} className='autoDisp' onClick={()=>props.displayPop(e)}>
                <div className='left'>
                <div className='imgBox'><img src={e.image} alt='image lost in this verse'></img></div>
                <div className='charName'>{e.name}</div>
            </div>
            
            
            <div className='right'>
            <div className='status'><div className={e.status==="Alive"?"greenCircle":e.status==="unknown"?"greyCircle":"redCircle"} />{e.status}</div>
            <span>-</span>
            <div className='species'>{e.species}</div>
            </div>
            </div>)}
            {/* <ModalCard /> */}
        </div>}
    </div>
  )
}
