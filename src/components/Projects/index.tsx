import { useState } from 'react';
import Project, { ProjectConfig } from './Project';
import ProjectPopup from './ProjectPopup';
import ProjectsBackground from './ProjectsBackground';
import FieldDescription from '../global/FieldDescription';
import FieldTitle from '../global/FieldTitle';
import FieldChips from '../global/FieldChips';

const projects: ProjectConfig[] = [
	{
		name: 'YouTube',
		icon: 'youtube.png',
		startDate: 'Mag 2020',
		endDate: 'Giu 2022',
		job: 'Content creator',
		thumbnail: 'https://i.postimg.cc/hGhMFFgW/giulioandcode.jpg',
		buttonLabel: 'Canale Youtube',
		buttonLink: 'https://youtube.it/@GiulioAndCode',
		fields: (
			<>
				<FieldDescription
					text='Video tutorial e di intrattenimento sul mondo della programmazione. Ho costruito una mia piccola community dove ancora oggi si riuniscono tanti
						piccoli sviluppatori e da cui ho imparato tanto'
				/>
				<FieldTitle text='Perchè ho smesso di farlo?' />
				<FieldDescription
					text='Era un grande lavoro di studio, dedizione e impegno, ma non riuscivo a dedicarci tanto tempo come avrei voluto. Ho preferisco dedicarmi più a progetti
					pratici personali'
				/>
			</>
		)
	},
	{
		name: 'PlayTourn',
		icon: 'playtourn.png',
		startDate: 'Mar 2021',
		endDate: null,
		job: 'App developer - Socio',
		thumbnail: 'https://i.postimg.cc/15KRV2Fq/playtourn.jpg',
		buttonLabel: 'Sito ufficiale',
		buttonLink: 'https://www.playtourn.com/',
		fields: (
			<>
				<FieldDescription
					text='Un bot Discord per creare e gestire in maniera professionale tornei di videogiochi, dal processo di iscrizione, alla gestione delle partite, fino alla
					creazione di classifiche'
				/>
				<FieldTitle text='Di cosa mi occupo?' />
				<FieldChips texts={['Progettazione app', 'Realizzazione app node.js']} />
			</>
		)
	},
	{
		name: 'YouTube',
		icon: 'youtube.png',
		startDate: 'Set 2021',
		endDate: null,
		job: 'Content creator',
		thumbnail: 'https://i.postimg.cc/L8Ddmg7d/giulio.png',
		buttonLabel: 'Canale YouTube',
		buttonLink: 'https://youtube.it/@GiulioAndBasta',
		fields: (
			<>
				<FieldDescription text='Un canale dove racconto a pieno la mia vita, racconto i miei pensieri, il percorso verso i miei obbiettivi e la mia quotidianità' />
				<FieldTitle text='Perchè mi piace farlo?' />
				<FieldDescription text='Come persona molto introversa, raccontare quello che faccio e quello che penso mi aiuta tantissimo a esternare quello che provo e a focalizzarmi sui miei obbiettivi' />
			</>
		)
	},
	{
		name: 'Jiulien',
		icon: 'jiulien.png',
		startDate: 'Nov 2023',
		endDate: null,
		job: 'App developer - UI Designer - Co-Founder',
		thumbnail: 'https://i.postimg.cc/nzXm277q/jiulien.jpg',
		buttonLabel: 'Sito ufficiale',
		buttonLink: 'https://jiulien.com/',
		fields: (
			<>
				<FieldDescription text='Un bot Discord per tutte le community, funzioni base utili per la gestione di un server' />
				<FieldTitle text='Di cosa mi occupo?' />
				<FieldChips texts={['Progettazione design sito web', 'Realizzazione app node.js']} />
			</>
		)
	}
];

const Projects = () => {
	const [openedPopupIndex, setOpenedPopupIndex] = useState<number | null>(null);

	return (
		<div id='progetti'>
			<ProjectPopup project={typeof openedPopupIndex === 'number' ? projects[openedPopupIndex] : null} setPopup={setOpenedPopupIndex} />
			<h3 className='text-center text-3xl font-medium text-neutral-950 block xl:hidden mb-36'>I miei progetti</h3>
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
		</div>
	);
};

export default Projects;
