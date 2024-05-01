import './App.css';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Presentation from './components/Presentation';

const App = () => {
	return (
		<main className='md:container max-w-[95%] m-auto px-6 gap-32 flex flex-col'>
			<Navbar />
			<Header />
			<Presentation />
		</main>
	);
};

export default App;
