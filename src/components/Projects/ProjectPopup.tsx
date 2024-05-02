import Card from '../global/Card';
import { ProjectConfig } from './Project';

type ProjectPopupProps = {
	project: ProjectConfig | null;
	setPopup: any;
};

const ProjectPopup = ({ project, setPopup }: ProjectPopupProps) => {
	if (!project) return <></>;

	const { name, startDate, endDate, job, thumbnail, buttonLabel, buttonLink, fields } = project;

	return (
		<div className=' bg-neutral-950/50 fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center'>
			<Card
				startDate={startDate}
				endDate={endDate}
				onClickCloseButton={() => setPopup(null)}
				title={name}
				subTitle={job}
				buttonLabel={buttonLabel}
				buttonLink={buttonLink}
				thumbnail={thumbnail}
				fields={fields}
			/>
		</div>
	);
};

export default ProjectPopup;
