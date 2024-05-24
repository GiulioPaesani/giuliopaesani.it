import FutureProjects from './FutureProjects';
import PortfolioProject from './PortfolioProject';

const PortfolioProjects = () => {
	return (
		<div className='w-full flex flex-wrap gap-8 justify-center'>
			<PortfolioProject
				title='giuliopaesani.it'
				description='Sito web personale per raccontare chi sono e le mie competenze'
				thumbnail='giuliopaesani.it.webp'
				url='https://www.giuliopaesani.it'
				githubUrl='https://github.com/GiulioPaesani/giuliopaesani.it'
				technology='React'
			/>
			<PortfolioProject
				title='Tombola online'
				description='Un semplice party game dove giocare a tombola con i propri amici e familiari'
				thumbnail='tombola.webp'
				url='https://tombola-online.it/'
				githubUrl='https://github.com/GiulioPaesani/tombola-online'
				technology='Angular'
			/>
			<FutureProjects />
		</div>
	);
};

export default PortfolioProjects;
