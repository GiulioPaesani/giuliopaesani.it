import './App.css';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Social from './components/Social';

const App = () => {
	return (
		<main className='md:container max-w-[95%] m-auto px-6 gap-32 lg:gap-40 flex flex-col pb-16'>
			<Navbar />
			<Header />
			<Presentation />
			<Skills />
			<Projects />
			<Education />
			<Social />
			<Footer />
		</main>
	);
};

export default App;
