import React from 'react'
import Link from '../link'
import styles from './index.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href= "/" title="Home" type='footer'></Link>
                <Link href= "/register" title="Register" type='footer'></Link>
                <Link href= "/login" title="Login" type='footer'></Link>
                <Link href= "#" title="Footer Going to 3" type='footer'></Link>

            </ul>
            <p className={styles.footerSign} >Emanuil Project 2020</p>

        </footer>
    )
}

export default Footer