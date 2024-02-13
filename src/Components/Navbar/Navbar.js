import Link from 'next/link'
import React from 'react'
import style from './Navbar.module.css'
import Button from '../Button/Button'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
const Navbar = () => {
  return (


    <>
  <div className={style.container}>
    <Link href={'/'} className={style.logo}>logo</Link>
  <ul className='nav'>
  <DarkModeToggle/>
  <Link className='link' href={'/'}> <li>Home</li></Link>
       <Link className='link' href={'/about'}> <li>About</li></Link>
       <Link className='link' href={'/blog'}> <li>Products</li></Link>
       <Link className='link' href={'/portfolio'}> <li>Portfolio</li></Link>
       <Link className='link' href={'/contact'}> <li>Contacts</li></Link>
       <Button/>
        
    </ul>
  </div>
    
    </>
  )
}

export default Navbar