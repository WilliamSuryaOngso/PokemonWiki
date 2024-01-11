import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import TodoApp from './Pages/todoApp';
import Pokemon from './Pages/pokemon';
import NavBar from './Components/NavBar'
import PokemonDetail from './Components/PokemonDetail';
import { useState } from 'react';

const App: React.FC = () => {

	const [theme,setTheme] = useState("light")
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<div>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/todoapp" element={<TodoApp />} />
						<Route path="/pokemon" element={<Pokemon />}/>
						<Route path="/pokemon/:pokedexNumber" element={<PokemonDetail />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)


}

export default App