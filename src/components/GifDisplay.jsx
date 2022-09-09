import React from 'react'
import styles from './GifDisplay.module.css'

const GifDisplay = (props) => {
  const gifURLS = props.sentGifs
  let index = props.sentIndex

  return (
    <>
    <img className={styles.image} src={gifURLS[index] != null ? gifURLS[index] : '../no-image.png'} alt="gif" />
    </>
  )
}

export default GifDisplay