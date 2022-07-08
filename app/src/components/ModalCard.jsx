import React from 'react'

export default function ModalCard(props) {
//  console.log(props.popdisp, props.mountModal, props.displayPop)
 
  return (
    <div>
        {props.mountModal && <div className='popCont'>
                <div className='popModal'>
                    <div className='killButton'><button className='killModalbttn' onClick={props.displayPop}>X</button></div>
                    <div className="popContent">
                        <div className='topDet'>
                            <div className='imgProf'><img src={props.popdisp.image} alt='not in this dimension'/></div>
                            <div className='topright'>
                                
                                <div className='trightDet'><h3>{props.popdisp.name}</h3><div className='trightfDet'><div className='status'><div className={props.popdisp.status==="Alive"?"greenCircle":props.popdisp.status==="unknown"?"greyCircle":"redCircle"} />{props.popdisp.status}</div>
                                <span>-</span>
                                <div className='species'>{props.popdisp.species}</div></div>
                                </div>
                            </div>
                        </div>
                        <span><hr></hr></span>
                        <div className='bottomDet'>
                            <div>
                                <div className='b1'>
                                    <div className='bTitle1'>
                                        <div>Gender</div>
                                        <div>{props.popdisp.gender}</div>
                                    </div>
                                    <div className='bTitle2'>
                                        <div >Location</div>
                                        <div>{props.popdisp.location.name}</div>
                                    </div>
                                </div>
                                <div className='b2'>
                                    <div className='bTitle1'>
                                        <div>Species</div>
                                        <div>{props.popdisp.species}</div>
                                    </div>
                                    <div className='bTitle2'>
                                        <div>Origin</div>
                                        <div>{props.popdisp.origin.name}</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bottomDet1"></div>
                    </div>
                </div>
            </div>}
    </div>
  )
}
