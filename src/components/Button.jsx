import React from 'react'
import styles from './Button.module.css'

const Button = props => {
	return (
		<button className={styles.button}>
			<p>{props.children}</p>
		</button>
	)
}

export default Button
