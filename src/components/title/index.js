import React from 'react'
import style from './index.module.css'


const Title = ({title})=>{

    return(
        <h1 className={style.title}>
            {title}

        </h1>
    )
}
export default Title