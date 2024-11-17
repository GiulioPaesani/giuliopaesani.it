'use client';

import { useState } from 'react';
import Project from './Project';
import ProjectPopup from './ProjectPopup';
import SectionTitle from '@/app/components/Header/SectionTitle';
import ProjectsBackground from './ProjectsBackground';
import { PROJECTS } from '@/app/constants/projects';

const Projects = () => {
	const [openedPopupIndex, setOpenedPopupIndex] = useState<number | null>(null);

	return (
		<div id='progetti'>
			<ProjectPopup project={typeof openedPopupIndex === 'number' ? PROJECTS[openedPopupIndex] : null} setPopup={setOpenedPopupIndex} />
			<SectionTitle text='Il mio percorso' className='block xl:hidden mb-36' />
			<div className='flex gap-40 h-[544px]'>
				<div className='w-full xl:w-1/2 hidden xl:block'>
					<SectionTitle text='Il mio percorso' />
				</div>
				<div className='w-full xl:w-1/2 relative'>
					<ProjectsBackground />
					<div className='w-[70%] h-full absolute right-2 sm:right-16 flex justify-between'>
						{PROJECTS.map((project, index) => (
							<Project project={project} index={index} key={index} setPopup={setOpenedPopupIndex} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
