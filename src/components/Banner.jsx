import React from 'react'
import { useState, useEffect } from 'react'

export default function Banner() {
    useEffect(()=>{
        const bannerElement = document.querySelectorAll("#bannerHolder")[0]
        let counter = 0;
        // setInterval(()=>{
        //     console.log(bannerElement)
        // },10000)
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
