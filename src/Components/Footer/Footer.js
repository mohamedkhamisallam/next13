import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import { AiFillTwitterCircle ,AiFillInstagram} from "react-icons/ai";
import style from './Footer.module.css'
const Footer = () => {
  return (
    <>


        {/* <h1 style={{marginTop:'20px',textAlign:'center'}}>Footer</h1> */}
        
        <div className={style.brand}>
        <div><FaFacebook style={{fontSize:"30px"}}/></div>
        <div><AiFillTwitterCircle style={{fontSize:"30px"}}/></div>
        <div><AiFillInstagram style={{fontSize:"30px"}}/></div>
        </div>

    </>
  )
}

export default Footer