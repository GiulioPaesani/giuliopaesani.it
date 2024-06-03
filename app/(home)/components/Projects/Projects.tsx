'use client';

import { useState } from 'react';
import Project, { ProjectConfig } from './Project';
import ProjectPopup from './ProjectPopup';
import SectionTitle from '@/app/components/Header/SectionTitle';
import ProjectsBackground from './ProjectsBackground';
import CardFieldDescription from '@/app/components/Card/CardFieldDescription';
import Chips from '@/app/components/Card/Chips';
import CardFieldTitle from '@/app/components/Card/CardFieldTitle';

const PROJECTS: ProjectConfig[] = [
	{
		name: 'YouTube',
		icon: 'youtube.webp',
		startDate: 'Mag 2020',
		endDate: 'Giu 2022',
		job: 'Content creator',
		thumbnail: 'https://i.postimg.cc/hGhMFFgW/giulioandcode.jpg',
		buttonLabel: 'Canale Youtube',
		buttonLink: 'https://youtube.it/@GiulioAndCode',
		fields: (
			<>
				<CardFieldDescription
					text='Video tutorial e di intrattenimento sul mondo della programmazione. Ho costruito una mia piccola community dove ancora oggi si riuniscono tanti
						piccoli sviluppatori e da cui ho imparato tanto'
				/>
			</>
		)
	},
	{
		name: 'PlayTourn',
		icon: 'playtourn.webp',
		startDate: 'Mar 2021',
		endDate: null,
		job: 'App developer - Socio',
		thumbnail: 'https://i.postimg.cc/15KRV2Fq/playtourn.jpg',
		buttonLabel: 'Scopri di più',
		buttonLink: '/portfolio/playtourn',
		fields: (
			<>
				<CardFieldDescription
					text='Un bot Discord per creare e gestire in maniera professionale tornei di videogiochi, dal processo di iscrizione, alla gestione delle partite, fino alla
					creazione di classifiche'
				/>
				<CardFieldTitle text='A cosa ho lavorato?' />
				<Chips texts={['Realizzazione app Node.js']} />
			</>
		)
	},
	{
		name: 'YouTube',
		icon: 'youtube.webp',
		startDate: 'Set 2021',
		endDate: null,
		job: 'Content creator',
		thumbnail: 'https://i.postimg.cc/L8Ddmg7d/giulio.png',
		buttonLabel: 'Canale YouTube',
		buttonLink: 'https://youtube.it/@GiulioAndBasta',
		fields: (
			<>
				<CardFieldDescription text='Un canale dove racconto a pieno la mia vita, racconto i miei pensieri, il percorso verso i miei obbiettivi e la mia quotidianità' />
			</>
		)
	},
	{
		name: 'Jiulien',
		icon: 'jiulien.webp',
		startDate: 'Nov 2023',
		endDate: null,
		job: 'App developer - UI/UX Designer - Co-Founder',
		thumbnail: 'https://i.postimg.cc/nzXm277q/jiulien.jpg',
		buttonLabel: 'Scopri di più',
		buttonLink: '/portfolio/jiulien',
		fields: (
			<>
				<CardFieldDescription text='Un bot Discord per tutte le community, funzioni base utili per la gestione di un server' />
				<CardFieldTitle text='A cosa ho lavorato?' />
				<Chips texts={['Progettazione design sito web', 'Realizzazione app Node.js']} />
			</>
		)
	}
];

const Projects = () => {
	const [openedPopupIndex, setOpenedPopupIndex] = useState<number | null>(null);

	return (
		<div id='progetti'>
			<ProjectPopup project={typeof openedPopupIndex === 'number' ? PROJECTS[openedPopupIndex] : null} setPopup={setOpenedPopupIndex} />
			<SectionTitle text='I miei progetti personali' className='block xl:hidden mb-36' />
			<div className='flex gap-40 h-[544px]'>
				<div className='w-full xl:w-1/2 hidden xl:block'>
					<SectionTitle text='I miei progetti personali' />
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
