"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const session = useSession()  
  const menus = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 4,
        title: 'About',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    }
  ]
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Lumine Software House</Link>
        <div className={styles.menus}>
            <DarkModeToggle />
            {menus.map(menu => (
                <Link href={menu.url} key={menu.id} className={styles.menu}>{menu.title}</Link>
            ))}
            {
                session.status === "authenticated" && (
                    <button 
                        className={styles.logout}
                        onClick={signOut}>
                        Logout
                    </button>
                )
            }
        </div>
    </div>
  )
}

export default Navbar