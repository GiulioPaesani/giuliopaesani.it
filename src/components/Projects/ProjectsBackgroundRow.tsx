type ProjectsBackgroundRowProps = {
	year: number;
};

const ProjectsBackgroundRow = ({ year }: ProjectsBackgroundRowProps) => {
	return (
		<div className='flex items-center gap-4'>
			<span className='text-2xl font-light text-neutral-700'>{year}</span>
			<div className='border-t-4 border-dashed border-neutral-700 w-full'></div>
		</div>
	);
};

export default ProjectsBackgroundRow;
