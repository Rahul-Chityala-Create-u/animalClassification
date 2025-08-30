import React from "react";
import { useEffect, useState } from "react";
export default function Optionselector(props){
    // const allAnimalsClasses =[... new Set( props.data.map(f=>f.taxonomy.class))]
    const [allAnimalsKingdom ,setKingDom]=useState([]);
    const [allAnimalsData, setAnimalData] = useState([]);
    const [phylums , setPhylums] = useState([]);
    const [animalClasses , setClasses] = useState([]);
    const [animalOrder , setOrder] = useState([]);
    const [animalFamily , setFamily] = useState([]);
    const [animalGenus , setGenus] = useState([]);
    const [animalSpecies , setSpecies] = useState([]);
    const [displayData, setFinalData] = useState([]);
    const [heading, setHeading] = useState("Kingdom");
    const [traceBack, setTrace] =useState([]);
   let selectedKingdom ="";
   let selectedPhylum ="";
   let selectedClass ="";
   let selectedOrder ="";
   let selectedFamily="";
   let selectedGenus ="";
   let selectedSpecies ="";
    useEffect(()=>{
         if (Array.isArray(props.data) && props.data.length != 0) {
            const kingdom = [...new Set(props.data.map(f=>f.taxonomy.kingdom))]
            setKingDom(kingdom);
            setAnimalData(props.data);
    }
       
    },[props.data])
    const handleClick = (kingdom,heading)=>{
        let thisHeading   = heading;
            console.log(kingdom)
            selectedKingdom = kingdom;
        const phylumData = [...new Set(allAnimalsData.filter(f=>f.taxonomy.kingdom == kingdom).map(k=>k.taxonomy.phylum))]
        let finalDisplayData = allAnimalsData.filter(f=>f.taxonomy.kingdom == kingdom);
        setPhylums(phylumData);
        setFinalData(finalDisplayData);
        setHeading(heading);
        showHideOptions(thisHeading);
         props.sendData(finalDisplayData) 
         let trace = {"data":kingdom,"heading":heading};
         setTrace(prevTrack=>[...prevTrack,trace]);
    }

    const handlePhylum = (phylum,heading)=>{
        let thisHeading   = heading;
        console.log(phylum)
            selectedPhylum = phylum;
        const classData = [...new Set(allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == phylum) .map(k=>k.taxonomy.class))]
        setClasses(classData);
        let finalDisplayData = allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == phylum) 
        setFinalData(finalDisplayData);
        setHeading(heading);
        showHideOptions(thisHeading);
        props.sendData(finalDisplayData);
        let trace = {"data":phylum,"heading":heading};
         setTrace(prevTrack=>[...prevTrack,trace]);
    }
    const handleClass = (classes,heading)=>{
        let thisHeading   = heading;
        console.log(classes)
            selectedClass = classes;
        const orderData = [...new Set(allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == classes).map(k=>k.taxonomy.order))]
        setOrder(orderData);
        let finalDisplayData = allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == classes)
        setFinalData(finalDisplayData);
        setHeading(heading);
        showHideOptions(thisHeading);
        props.sendData(finalDisplayData);
        let trace = {"data":classes,"heading":heading};
         setTrace(prevTrack=>[...prevTrack,trace]);
    }
    const handleOrder = (order,heading)=>{
        let thisHeading   = heading;
        console.log(order)
            selectedOrder = order;
        const familyData = [...new Set(allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == selectedClass) && allAnimalsData.filter(f=>f.taxonomy.order == order).map(k=>k.taxonomy.family))]
        setFamily(familyData);

        let finalDisplayData = allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == selectedClass) && allAnimalsData.filter(f=>f.taxonomy.order == order)
        setFinalData(finalDisplayData);
        setHeading(heading);
        showHideOptions(thisHeading);
        props.sendData(finalDisplayData);
        let trace = {"data":order,"heading":heading};
         setTrace(prevTrack=>[...prevTrack,trace]);
    }
    const handleFamily = (family,heading)=>{
        let thisHeading   = heading;
        console.log(family)
            selectedFamily = family;
        const genusData = [...new Set(allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == selectedClass) && allAnimalsData.filter(f=>f.taxonomy.order == selectedOrder) && allAnimalsData.filter(f=>f.taxonomy.family == family).map(k=>k.taxonomy.genus))]
        setGenus(genusData);
        let finalDisplayData = allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == selectedClass) && allAnimalsData.filter(f=>f.taxonomy.order == selectedOrder) && allAnimalsData.filter(f=>f.taxonomy.family == family)
        setFinalData(finalDisplayData);
        setHeading(heading);
        showHideOptions(thisHeading);
        props.sendData(finalDisplayData);
         let trace = {"data":family,"heading":heading};
         setTrace(prevTrack=>[...prevTrack,trace]);
    }
    const handleGenus =(genus,heading)=>{
        let thisHeading   = heading;
        console.log(genus)
            selectedGenus = genus;
        const speciesData = [...new Set(allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == selectedClass) && allAnimalsData.filter(f=>f.taxonomy.order == selectedOrder) && allAnimalsData.filter(f=>f.taxonomy.family == selectedFamily) && allAnimalsData.filter(f=>f.taxonomy.genus == genus).map(k=>k.taxonomy.scientific_name))]
        setSpecies(speciesData);

        let finalDisplayData = allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == selectedClass) && allAnimalsData.filter(f=>f.taxonomy.order == selectedOrder) && allAnimalsData.filter(f=>f.taxonomy.family == selectedFamily) && allAnimalsData.filter(f=>f.taxonomy.genus == genus)
        setFinalData(finalDisplayData);
        setHeading(heading);
        showHideOptions(thisHeading);
        props.sendData(finalDisplayData);
        let trace = {"data":genus,"heading":heading};
         setTrace(prevTrack=>[...prevTrack,trace]);
    }
    const handleSpecies =(species,heading)=>{
        let thisHeading   = heading;
            selectedSpecies = species;
             let finalDisplayData = allAnimalsData.filter(f=>f.taxonomy.kingdom == selectedKingdom) && allAnimalsData.filter(f=>f.taxonomy.phylum == selectedPhylum) && allAnimalsData.filter(f=>f.taxonomy.class == selectedClass) && allAnimalsData.filter(f=>f.taxonomy.order == selectedOrder) && allAnimalsData.filter(f=>f.taxonomy.family == selectedFamily) && allAnimalsData.filter(f=>f.taxonomy.genus == selectedGenus) && allAnimalsData.filter(f=>f.taxonomy.scientific_name == selectedSpecies)
        setFinalData(finalDisplayData);
        setHeading(heading);
        showHideOptions(thisHeading);
        props.sendData(finalDisplayData);
        let trace = {"data":species,"heading":heading};
         setTrace(prevTrack=>[...prevTrack,trace]);
    }

    function showHideOptions(thisHeading){
        document.querySelectorAll(".sideOpts").forEach(f=>{
            f.classList.add("hide");
        })
        let ul =  document.querySelectorAll("."+thisHeading)[0]
         ul.classList.remove("hide");
    }

    return(
        <>
        <div className="optionSelector">
            <h1 className="heading">{heading}</h1>
            <ul className={`sideOpts Kingdom`} >
                
                {allAnimalsKingdom.map((animalKingdom,index)=>{
                        return (<li key={index} onClick={()=>handleClick(animalKingdom,"Phylum")}>{animalKingdom}</li>)
                    })}     
            </ul>
            <ul className={`sideOpts hide Phylum`}>
                 
                 {phylums.map((phylum,index)=>{
                        return (<li key={index} onClick={()=>handlePhylum(phylum,"Class")}>{phylum}</li>)
                    })}  
            </ul>
             <ul className={`sideOpts hide Class`}>
                 
                 {animalClasses.map((classes,index)=>{
                        return (<li key={index} onClick={()=>handleClass(classes,"Order")}>{classes}</li>)
                    })}  
            </ul>
            <ul className={`sideOpts hide Order`}>
                
                 {animalOrder.map((order,index)=>{
                        return (<li key={index} onClick={()=>handleOrder(order,"Family")}>{order}</li>)
                    })}  
            </ul>
             <ul className={`sideOpts hide Family`}>
                 
                 {animalFamily.map((Family,index)=>{
                        return (<li key={index} onClick={()=>handleFamily(Family,"Genus")}>{Family}</li>)
                    })}  
            </ul>
             <ul className={`sideOpts hide Genus`}>
                
                 {animalGenus.map((genus,index)=>{
                        return (<li key={index} onClick={()=>handleGenus(genus,"Scientific_Name")}>{genus}</li>)
                    })}  
            </ul>
             <ul className={`sideOpts hide Scientific_Name`}>
                
                 {animalSpecies.map((species,index)=>{
                        //return (<li key={index} onClick={()=>handleGenus(genus,"Genus")}>{genus}</li>)
                        return(<li key={index} onClick={()=>handleSpecies(species,"Scientific_Name")}>{species}</li>)
                    })}  
            </ul>
        </div>
        </>
    )
}