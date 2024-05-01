import Button from '../Button';
import { ProjectConfig } from './Project';

type ProjectPopupProps = {
	project: ProjectConfig | null;
	setPopup: any;
};

const ProjectPopup = ({ project, setPopup }: ProjectPopupProps) => {
	if (!project) return <></>;

	const scrollTop = document.documentElement.scrollTop;
	const scrollLeft = document.documentElement.scrollLeft;

	window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);

	const enableScroll = () => (window.onscroll = null);

	const { name, startDate, endDate, job, thumbnail, description, buttonLabel, buttonLink } = project;

	return (
		<div className=' bg-neutral-950/50 fixed top-0 left-0 z-50  w-full h-full flex items-center justify-center'>
			<div className='bg-primary-500 rounded-lg w-4/5 lg:w-2/5 p-6'>
				<div className='flex items-center gap-2'>
					<h4 className='text-xl font-light text-primary-200'>{startDate}</h4>
					<div className='size-1 bg-primary-200 rounded-full'></div>
					<h4 className='text-xl font-light text-primary-200'>{endDate ?? 'Presente'}</h4>

					<Button
						type='tertiary'
						icon='x.svg'
						onClick={() => {
							setPopup(null);
							enableScroll();
						}}
						className='ml-auto'
					/>
				</div>
				<h2 className='text-3xl font-medium text-neutral-50 my-2'>{name}</h2>
				<h3 className='text-2xl font-light text-primary-200'>{job}</h3>
				<div className='w-full h-48 rounded-lg bg-cover bg-center my-6' style={{ backgroundImage: `url("${thumbnail}")` }}></div>
				<p className='text-2xl text-neutral-50'>{description}</p>
				<Button type='tertiary' label={buttonLabel} icon='external-link.svg' onClick={buttonLink} className='mt-12' />
			</div>
		</div>
	);
};

export default ProjectPopup;
