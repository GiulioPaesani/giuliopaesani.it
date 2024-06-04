import Button from '@/app/components/Button/Button';
import CardFieldDescription from '@/app/components/Card/CardFieldDescription';
import CardFieldTitle from '@/app/components/Card/CardFieldTitle';
import CardSubtitle from '@/app/components/Card/CardSubtitle';
import CardTitle from '@/app/components/Card/CardTitle';
import Chip from '@/app/components/Card/Chip';
import Image from 'next/image';

export type PortfolioProject = {
	id: string;
	thumbnail: string;
	title: string;
	jobs: string[];
	description: string;
	link: string;
	mainTechnology: {
		name: string;
		icon: string;
	};
};

type ProjectProps = {
	project: PortfolioProject;
	col?: boolean;
};

const Project = ({ project, col }: ProjectProps) => {
	return (
		<>
			<div
				className={`relative rounded-lg overflow-hidden block sm:hidden ${
					col ? 'w-full h-32 sm:h-48 xl:h-80 lg:block' : 'h-32 sm:h-full w-full sm:w-96 xl:block'
				}`}>
				<Image src={`/${project.thumbnail}`} width={1920} height={1080} alt={project.title} className='object-cover w-full h-full' />

				<div className='absolute bottom-0 w-full flex justify-center'>
					<Chip text={project.mainTechnology.name} icon={project.mainTechnology.icon} />
				</div>
			</div>

			<div className='flex flex-col h-full w-full'>
				<div className='flex gap-6'>
					<div className={`w-full sm:w-1/2 ${col ? 'lg:w-full' : 'xl:w-full'}`}>
						<CardTitle text={project.title} />
						<CardSubtitle text={project.jobs.join(' - ')} />
					</div>
					<div className={`relative rounded-lg overflow-hidden hidden sm:block h-32 w-1/2 ${col ? 'lg:hidden' : 'xl:hidden'}`}>
						<Image src={`/${project.thumbnail}`} width={1920} height={1080} alt={project.title} className='object-cover w-full h-full' />

						<div className='absolute bottom-0 w-full flex justify-center'>
							<Chip text={project.mainTechnology.name} icon={project.mainTechnology.icon} />
						</div>
					</div>
				</div>

				<CardFieldDescription text={project.description} className='my-10' />

				<div className='flex gap-4 mt-auto flex-wrap'>
					<Button type='tertiary' label='Visita' icon='external-link.svg' alt='Visita progetto' onClick={project.link} />
					<Button type='primary' label='Scopri di più' alt='Scopri di più sul progetto' onClick={`/portfolio/${project.id}`} />
				</div>
			</div>
		</>
	);
};

export default Project;
