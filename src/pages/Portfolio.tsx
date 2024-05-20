import PortfolioProjects from '../components/PortfolioProjects';

const Portfolio = () => {
	return (
		<main className='md:container max-w-[95%] m-auto px-6 gap-32 lg:gap-40 flex flex-col pb-16'>
			<div className='mt-20'>
				<h1 className='text-4xl sm:text-6xl text-neutral-950 font-bold mb-2'>Portfolio</h1>
				<h1 className='text-2xl sm:text-4xl text-neutral-950'>Piccoli progetti pratici per sfruttare le mie competenze</h1>
			</div>
			<PortfolioProjects />
		</main>
	);
};

export default Portfolio;
