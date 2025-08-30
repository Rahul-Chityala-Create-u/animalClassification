import React, { useState } from "react";
import { useEffect } from "react";
import Optionselector from "./Optionselector";
import Displaycontent from "./Displaycontent";

export default function Body(props){
    const[animalsdata , setAnimalData] = useState(0);
    const[shareAnimalData, setSharedData] = useState([]);
    useEffect(()=>{
        setAnimalData(props.data)
    },[props.data])
    return(
        <>
           <div className="bodyCover">
            <Optionselector data={animalsdata} sendData={setSharedData}></Optionselector>
            <Displaycontent data={shareAnimalData}></Displaycontent>
            </div> 
        </>
    )
}