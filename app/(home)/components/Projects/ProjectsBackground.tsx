import ProjectsBackgroundRow from './ProjectsBackgroundRow';

const ProjectsBackground = () => {
	return (
		<div className='w-full h-full flex flex-col justify-between absolute top-0'>
			{[2020, 2021, 2022, 2023, 2024].map((year, index) => (
				<ProjectsBackgroundRow year={year} key={index} />
			))}
		</div>
	);
};

export default ProjectsBackground;
