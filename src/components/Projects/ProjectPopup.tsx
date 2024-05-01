import Card from '../global/Card';
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
			<Card
				startDate={startDate}
				endDate={endDate}
				onClickCloseButton={() => {
					setPopup(null);
					enableScroll();
				}}
				title={name}
				subTitle={job}
				buttonLabel={buttonLabel}
				buttonLink={buttonLink}
				thumbnail={thumbnail}
				fields={<p className='text-2xl text-neutral-50'>{description}</p>}
			/>
		</div>
	);
};

export default ProjectPopup;
