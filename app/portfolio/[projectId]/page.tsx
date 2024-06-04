import PORTFOLIO_PROJECTS from '@/app/constants/portfolio';
import { notFound } from 'next/navigation';
import Thumbnail from './components/Thumbnail.tsx/Thumbnail';
import Header from './components/Header/Header';
import Button from '@/app/components/Button/Button';
import Presentation from '@/app/components/Presentation/Presentation';
import Jobs from '../components/Presentation/Jobs';

type PortfolioProjectProps = {
	params: {
		projectId: string;
	};
};

export async function generateStaticParams() {
	return PORTFOLIO_PROJECTS.map(project => ({
		projectId: project.id
	}));
}

const PortfolioProject = ({ params }: PortfolioProjectProps) => {
	const project = PORTFOLIO_PROJECTS.find(project => project.id === params.projectId);

	if (!project) {
		notFound();
	}

	return (
		<>
			<div>
				<Thumbnail thumbnail={project.thumbnail} alt={project.title} />
				<Header text={project.title} />

				<Button type='primary' label='Visita' icon='external-link3.svg' alt='Visita progetto' onClick={project.link} className='mt-2 mx-auto' />
			</div>

			<Presentation description={project.longDescription} infos={<Jobs jobs={project.jobs} />} image={project.images} />
		</>
	);
};

export default PortfolioProject;
