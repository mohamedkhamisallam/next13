"use client"
import React, { useContext } from 'react'
import styles from './DarkModeToggle.module.css'
import {MdNightlight} from 'react-icons/md'
import { ThemeContext } from '@/app/context/themeContext'
const DarkModeToggle = () => {
    const {mode,toggle} = useContext(ThemeContext)
  return (
    <>
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}><MdNightlight style={{color:"yellow"}} /></div>
        <div className={styles.icon}><MdNightlight style={{color:"#bbb"}} /></div>
        <div className={styles.switch} style={mode==='light'? {left:'2px'}:{right:'2px'}}></div>
    </div>
    </>
  )
}

export default DarkModeToggle