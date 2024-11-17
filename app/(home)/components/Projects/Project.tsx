import Image from 'next/image';

export type ProjectConfig = {
	name: string;
	icon: string;
	startDate: string;
	endDate: string | null;
	job: string;
	thumbnail: string | null;
	buttonLabel: string | null;
	buttonLink: string | null;
	fields: JSX.Element;
	startPoint: number;
	endPoint: number | null;
};

type ProjectProps = {
	index: number;
	project: ProjectConfig;
	setPopup: any;
};

const Project = ({ index, project, setPopup }: ProjectProps) => {
	return (
		<div className='relative h-full'>
			<div
				className={`cursor-pointer group absolute`}
				onClick={() => setPopup(index)}
				style={{ height: `${(project.endPoint ?? 100) - project.startPoint}%`, top: `${project.startPoint}%` }}>
				<div className='w-14 sm:w-40 h-12 bg-primary-500 absolute rounded-lg flex items-center justify-center gap-4 -top-16 -left-[24px] sm:-left-[80px] group-hover:-top-20 ease-in-out duration-200'>
					<Image width={32} height={32} className='rounded-lg' src={`/icons/${project.icon}`} alt={`Maggiori informazioni sul progetto ${project.name}`} />
					<span className='text-xl text-neutral-50 hidden sm:block'>{project.name}</span>
				</div>

				<div className='size-8 rounded-full bg-primary-500 absolute -left-3 -top-1'></div>
				<div className='border-r-8 border-primary-500 h-full'></div>
				{project.endPoint ? (
					<div className='size-8 rounded-full bg-primary-500 absolute -left-3 -bottom-1'></div>
				) : (
					<div className='border-r-8 border-dashed border-primary-500 h-16'></div>
				)}
			</div>
		</div>
	);
};

export default Project;
