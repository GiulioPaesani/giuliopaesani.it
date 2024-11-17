import CardFieldDescription from '@/app/components/Card/CardFieldDescription';
import Chips from '@/app/components/Card/Chips';
import CardFieldTitle from '@/app/components/Card/CardFieldTitle';
import { ProjectConfig } from '../(home)/components/Projects/Project';

export const PROJECTS: ProjectConfig[] = [
	{
		name: 'YouTube',
		icon: 'youtube.webp',
		startDate: 'Mag 2020',
		endDate: 'Giu 2022',
		job: 'Content creator',
		thumbnail: 'giulioandcode.webp',
		buttonLabel: 'Canale Youtube',
		buttonLink: 'https://youtube.it/@GiulioAndCode',
		fields: (
			<>
				<CardFieldDescription
					text='Video tutorial e di intrattenimento sul mondo della programmazione. Ho costruito una mia piccola community dove ancora oggi si riuniscono tanti
					piccoli sviluppatori e da cui ho imparato tanto'
				/>
			</>
		),
		startPoint: 8,
		endPoint: 50
	},
	{
		name: 'PlayTourn',
		icon: 'playtourn.webp',
		startDate: 'Mar 2021',
		endDate: 'Set 2024',
		job: 'App developer - Socio',
		thumbnail: 'playtourn.webp',
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
		),
		startPoint: 25,
		endPoint: 90
	},
	{
		name: 'YouTube',
		icon: 'youtube.webp',
		startDate: 'Set 2021',
		endDate: null,
		job: 'Content creator',
		thumbnail: 'giulioandbasta.webp',
		buttonLabel: 'Canale YouTube',
		buttonLink: 'https://youtube.it/@GiulioAndBasta',
		fields: (
			<>
				<CardFieldDescription text='Un canale dove racconto a pieno la mia vita, racconto i miei pensieri, il percorso verso i miei obbiettivi e la mia quotidianità' />
			</>
		),
		startPoint: 35,
		endPoint: null
	},
	{
		name: 'Jiulien',
		icon: 'jiulien.webp',
		startDate: 'Nov 2023',
		endDate: 'Nov 2024',
		job: 'App developer - UI/UX Designer - Co-Founder',
		thumbnail: 'jiulien.webp',
		buttonLabel: 'Scopri di più',
		buttonLink: '/portfolio/jiulien',
		fields: (
			<>
				<CardFieldDescription text='Un bot Discord per tutte le community, funzioni base utili per la gestione di un server' />
				<CardFieldTitle text='A cosa ho lavorato?' />
				<Chips texts={['Progettazione design sito web', 'Realizzazione app Node.js']} />
			</>
		),
		startPoint: 75,
		endPoint: 95
	},
	{
		name: '??????',
		icon: 'azienda.webp',
		startDate: 'Lug 2024',
		endDate: null,
		job: 'Web developer - Web designer',
		thumbnail: null,
		buttonLabel: null,
		buttonLink: null,
		fields: (
			<>
				<CardFieldDescription
					text="Mi occupo principale di sviluppo web, prima dalla parte di progettazione grafica dell'interfaccia e poi di sviluppo effettivo in una web application"
					className='mt-6'
				/>
				<CardFieldTitle text='Nuovi competenze che sto imparando' />
				<Chips texts={['C#', 'Python', 'Coordinarsi con altre persone', 'Dividersi il lavoro']} />
			</>
		),
		startPoint: 87,
		endPoint: null
	}
];
