import './App.css';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Skills from './components/Skills';

const App = () => {
	return (
		<main className='md:container max-w-[95%] m-auto px-6 gap-32 flex flex-col pb-[200px]'>
			<Navbar />
			<Header />
			<Presentation />
			<Skills />
		</main>
	);
};

export default App;
