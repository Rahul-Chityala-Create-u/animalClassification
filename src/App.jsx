import { useState ,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Banner from './components/Banner'
import Body from './components/BodyDisp'

function App() {
  const [animalData, setData] = useState(0)

  useEffect(()=>{
    axios.get("https://api.api-ninjas.com/v1/animals?name=all",{
      headers:{
        'x-api-key': 'xfQCR78wfdAk0Kjmn3G2zw==zfGDa88l0sUOo2Jo' 

      }
    })
    .then(response =>{
      setData(response.data)
    })
    .catch(error=>{
      console.error('API Error:', error);
    });
  },[]);
  return (
    <>
   <Banner></Banner>
   <Body data={animalData}></Body>
    </>
  )
}

export default App
