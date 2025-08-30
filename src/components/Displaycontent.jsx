import React, { useEffect, useState } from 'react'
export default function Displaycontent(props) {
const[dispData, setDispData] = useState([])
 useEffect(()=>{
  setDispData(props.data);
  console.log(props.data);
 },[props.data])
  return (
    <>
    <div className='contentHolder'>
      <h1 className='heading'>ANIMALS</h1>
    <div className='dspContent'>

       {dispData.map((data,index)=>{
          return(<>
            <div key={index} className='animalnames'>
            <b key={index}>{data.name}</b>
            <div className="cardBody" key={index}>
              <span><b>Habitat</b>:<p>{data.characteristics.habitat}</p></span>
              <span><b>Lifespan</b>:<p>{data.characteristics.lifespan}</p></span>
              <span><b>Weight </b>:<p>{data.characteristics.weight}</p></span>
              <span><b>Prey</b>:<p>{data.characteristics.prey}</p></span>
              <span><b>Predators</b>:<p>{data.characteristics.predators}</p></span>
              <span><b>Young Ones</b>:<p>{data.characteristics.name_of_young}</p></span>
            </div>
            </div>

          </>)
        })}
    </div>
       </div>
    </>
  )
}
