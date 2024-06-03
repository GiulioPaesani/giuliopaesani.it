import Image from 'next/image';

export type ProjectConfig = {
	name: string;
	icon: string;
	startDate: string;
	endDate: string | null;
	job: string;
	thumbnail: string;
	buttonLabel: string;
	buttonLink: string;
	fields: JSX.Element;
};

type ProjectProps = {
	index: number;
	project: ProjectConfig;
	setPopup: any;
};

const Project = ({ index, project, setPopup }: ProjectProps) => {
	return (
		<>
			<div
				className={`${index === 0 && 'h-[60%]'} ${
					index === 0 ? 'mt-0' : index === 1 ? 'mt-40' : index === 2 ? 'mt-60' : 'mt-[500px]'
				} relative cursor-pointer group`}
				onClick={() => setPopup(index)}>
				<div className='w-14 sm:w-48 h-14 bg-primary-500 absolute rounded-lg flex items-center -top-16 -left-[24px] sm:-left-[96px] group-hover:-top-20 ease-in-out duration-200'>
					<Image
						width={40}
						height={40}
						className='rounded-lg mx-2 sm:mx-4'
						src={`/icons/${project.icon}`}
						alt={`Maggiori informazioni sul progetto ${project.name}`}
					/>
					<span className='text-2xl text-neutral-50 hidden sm:block'>{project.name}</span>
				</div>

				<div className='size-8 rounded-full bg-primary-500 absolute -left-3 -top-1'></div>
				<div className='border-r-8 border-primary-500 h-full'></div>
				{index === 0 ? (
					<div className='size-8 rounded-full bg-primary-500 absolute -left-3 -bottom-1'></div>
				) : (
					<div className='border-r-8 border-dashed border-primary-500 h-16'></div>
				)}
			</div>
		</>
	);
};

export default Project;
