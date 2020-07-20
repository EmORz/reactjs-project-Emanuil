import React from 'react'
import Header from '../../components/header'
import styles from './index.module.css'


import Footer from '../../components/footer'

const PageWrapper = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>

        {props.children}
       
      </div>
      <Footer />
    </div>
  )
}

export default PageWrapper
