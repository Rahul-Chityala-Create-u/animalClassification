import React from 'react'
import { useState, useEffect } from 'react'

export default function Banner() {
    useEffect(()=>{
        const bannerElement = document.querySelectorAll("#bannerHolder h1")[0]
        let counter = 0;
        let countryArr = ['WILDLIFE MUMBAI','WILDLIFE ASIA','WILDLIFE AFRICA','WILDLIFE AUSTRIALA','WILDLIFE EUROPE']
       let index= 0
        // setInterval(()=>{
        //     // for (let index = 0; index < countryArr.length; index++) {
        //         const PLACE = countryArr[index];
        //         bannerElement.textContent = PLACE
        //         index++;
        //     // }


                
        // },1000)
       
         
    });
    return (
    <>
        <div id="bannerHolder">
    <h1>WILDLIFE MUMBAI</h1>
        </div>
        <div className='bannerBottom'></div>
    </>
  )
}
