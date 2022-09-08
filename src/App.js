import './App.css'
import Button from './components/Button'
import GifDisplay from './components/GifDisplay'
import InputForm from './components/InputForm'

function App() {
	return (
		<div className="outer-container">
			<h1 className="title">Find a GIF!</h1>
			<InputForm />
			<div className="display-container">
				<GifDisplay />
				<Button>{'❮'}</Button>
				<Button>{'❯'}</Button>
			</div>
		</div>
	)
}

export default App
