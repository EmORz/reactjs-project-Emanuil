import React from 'react'
import styles from './index.module.css'


const Link = ({title, href, type})=>{
    return (
        <li className={styles[`${type}-list-item`]}>
            <a href={href} className={styles[`${type}-link`]}>{title}</a>
        </li>
    )
}

export default Link