import { useState, useReducer } from 'react'
import './App.css'
import Button from './components/Button'
import GifDisplay from './components/GifDisplay'
import InputForm from './components/InputForm'
import axios from 'axios'

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { index: (state.index += 1) }
		case 'decrement':
			return { index: (state.index -= 1) }
		case 'reset':
			return { index: (state.index = 0) }
		default:
			throw new Error()
	}
}

function App() {
	const [loadedGifs, setLoadedGifs] = useState('')
	const [state, dispatch] = useReducer(reducer, { index: 0 })

	const getGifs = input => {
		dispatch({ type: 'reset' })
		axios
			.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${input}&limit=50&offset=0&rating=g&lang=en`
			)
			.then(({ data }) => {
				const gifs = data.data
				const gifImgArr = gifs.map(
					gifObj => gifObj.images.downsized.url
				)
				setLoadedGifs(gifImgArr)
			})
			.catch(err => {
				console.error(err)
			})
	}

	const decrementIndex = () => {
		if (state.index === 0) {
			dispatch({ type: 'reset' })
		} else dispatch({ type: 'decrement' })
	}

	const incrementIndex = () => {
		if (state.index === loadedGifs.length - 1) {
			dispatch({ type: 'reset' })
		} else dispatch({ type: 'increment' })
	}

	return (
		<div className="outer-container">
			<h1 className="title">GIF Finder</h1>
			<InputForm onReceiveInput={getGifs} />
			<div className="display-container">
				<Button onClick={decrementIndex}>{'❮'}</Button>
				{loadedGifs.length === 0 ? (
					<h2>Search for some GIFs!</h2>
				) : (
					<GifDisplay sentGifs={loadedGifs} sentIndex={state.index} />
				)}
				<Button onClick={incrementIndex}>{'❯'}</Button>
			</div>
			<div className="wrapper">
				<h1 className="built-with">Built With</h1>
				<img className="react" src="../react-logo.png" alt="React" />
			</div>
		</div>
	)
}

export default App
