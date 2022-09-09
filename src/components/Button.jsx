import React from 'react'
import styles from './Button.module.css'

const Button = props => {

	return (
		<button className={styles.btn} onClick={props.onClick}>
			<p className={styles.text}>{props.children}</p>
		</button>
	)
}

export default Button
