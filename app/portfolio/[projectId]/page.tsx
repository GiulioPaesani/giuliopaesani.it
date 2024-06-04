import PORTFOLIO_PROJECTS from '@/app/constants/portfolio';
import { notFound } from 'next/navigation';
import Thumbnail from './components/Thumbnail.tsx/Thumbnail';
import Header from './components/Header/Header';

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
			</div>
		</>
	);
};

export default PortfolioProject;
