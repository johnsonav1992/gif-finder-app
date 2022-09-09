import { React, useState } from 'react'
import styles from './InputForm.module.css'

const InputForm = props => {
	const [input, setInput] = useState('')

  function submitHandler(e) {
    e.preventDefault()
    props.onReceiveInput(input)
	setInput('')
  }
  

	return (
		<form action="submit" className={styles.form} onSubmit={submitHandler}>
			<input
				type="text"
				className={styles.input}
				placeholder="Type something!"
				onChange={e => setInput(e.target.value)}
				value={input}
			/>
			<button className={styles.button}>Search</button>
		</form>
	)
}

export default InputForm
