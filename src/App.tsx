import './App.css';
import Education from './components/Education';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
	return (
		<main className='md:container max-w-[95%] m-auto px-6 gap-32 flex flex-col pb-[200px]'>
			<Navbar />
			<Header />
			<Presentation />
			<Skills />
			<Projects />
			<Education />
		</main>
	);
};

export default App;
