import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/portfolio' element={<Portfolio />}></Route>
				<Route path='*' element={<Navigate to='/' />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
