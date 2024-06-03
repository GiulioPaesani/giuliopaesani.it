import PORTFOLIO_PROJECTS from '@/app/constants/portfolio';
import Project from './Project';

const Projects = () => {
	return (
		<div className='flex flex-col lg:grid grid-cols-3 grid-rows-2 gap-8 '>
			<div className='bg-primary-500 rounded-lg col-span-2 p-6 flex gap-6 flex-col sm:flex-row'>
				<Project project={PORTFOLIO_PROJECTS[0]} />
			</div>

			<div className='bg-primary-500 rounded-lg col-span-2 col-start-1 row-start-2 p-6 flex flex-col sm:flex-row-reverse gap-6'>
				<Project project={PORTFOLIO_PROJECTS[1]} />
			</div>
			<div className='bg-primary-500 rounded-lg row-span-2 col-start-3 row-start-1 p-6 flex-col flex gap-6'>
				<Project project={PORTFOLIO_PROJECTS[2]} col={true} />
			</div>
		</div>
	);
};

export default Projects;
