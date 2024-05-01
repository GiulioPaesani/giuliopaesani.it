import { useState } from 'react';
import Project, { ProjectConfig } from './Project';
import ProjectPopup from './ProjectPopup';
import ProjectsBackground from './ProjectsBackground';

const projects: ProjectConfig[] = [
	{
		name: 'YouTube',
		icon: 'youtube.png',
		startDate: 'Mag 2020',
		endDate: 'Giu 2022',
		job: 'Content creator',
		thumbnail: 'https://i.postimg.cc/MZ45kGMN/Banner2.jpg',
		description: ' slkdjf skdjh bsdkjhfbsdkjhbkfdjhdf',
		buttonLabel: 'Canale Youtube',
		buttonLink: 'https://youtube.it/@GiulioAndCode'
	},
	{
		name: 'PlayTourn',
		icon: 'playtourn.png',
		startDate: 'Mar 2021',
		endDate: null,
		job: 'App developer - Socio',
		thumbnail: 'https://i.postimg.cc/MZ45kGMN/Banner2.jpg',
		description: ' slkdjf skdjh bsdkjhfbsdkjhbkfdjhdf',
		buttonLabel: 'Sito ufficiale',
		buttonLink: 'https://www.google.it'
	},
	{
		name: 'YouTube',
		icon: 'youtube.png',
		startDate: 'Set 2021',
		endDate: null,
		job: 'Content creator',
		thumbnail: 'https://i.postimg.cc/MZ45kGMN/Banner2.jpg',
		description: ' slkdjf skdjh bsdkjhfbsdkjhbkfdjhdf',
		buttonLabel: 'Sito ufficiale',
		buttonLink: 'https://www.google.it'
	},
	{
		name: 'Jiulien',
		icon: 'jiulien.png',
		startDate: 'Nov 2023',
		endDate: null,
		job: 'App developer - UI Designer - Co-Founder',
		thumbnail: 'https://i.postimg.cc/MZ45kGMN/Banner2.jpg',
		description: ' slkdjf skdjh bsdkjhfbsdkjhbkfdjhdf',
		buttonLabel: 'Sito ufficiale',
		buttonLink: 'https://www.google.it'
	}
];

const Projects = () => {
	const [openedPopupIndex, setOpenedPopupIndex] = useState(null);

	return (
		<>
			<ProjectPopup project={typeof openedPopupIndex === 'number' ? projects[openedPopupIndex] : null} setPopup={setOpenedPopupIndex} />
			<h3 className='text-center text-3xl font-medium text-neutral-950 block xl:hidden'>I miei progetti</h3>
			<div className='flex gap-40 h-[544px]'>
				<div className='w-full xl:w-1/2 hidden xl:block'>
					<h3 className='text-center text-3xl font-medium text-neutral-950'>I miei progetti</h3>
				</div>
				<div className='w-full xl:w-1/2 relative'>
					<ProjectsBackground />
					<div className='w-[70%] h-full absolute right-2 sm:right-16 flex justify-between'>
						{projects.map((project, index) => (
							<Project project={project} index={index} key={index} setPopup={setOpenedPopupIndex} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
