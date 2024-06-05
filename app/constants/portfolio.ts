import { PortfolioProject } from '../portfolio/components/Projects/Project';

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
	{
		id: 'jiulien',
		thumbnail: 'jiulien.webp',
		title: 'Jiulien',
		jobs: ['Progettazione grafica', 'Sviluppo App'],
		description: 'Uno strumento essenziale per tutte le community Discord, funzioni base utili per la gestione di un server tra comodità e divertimento',
		link: 'https://jiulien.com/',
		mainTool: {
			label: 'Node.js',
			icon: 'node.svg'
		},
		images: ['jiulien1.webp', 'jiulien2.webp', 'jiulien3.webp'],
		primaryTools: [
			{
				label: 'Node.js',
				icon: 'node.svg'
			},
			{
				label: 'TypeScript',
				icon: 'typescript.svg'
			},
			{
				label: 'Figma',
				icon: 'figma.svg'
			}
		],
		secondaryTools: [
			{
				label: 'Mongo DB',
				icon: 'mongodb.svg'
			},
			{
				label: 'Git',
				icon: 'git.svg'
			},
			{
				label: 'Docker',
				icon: 'docker.svg'
			}
		],
		github: null
	},
	{
		id: 'playtourn',
		thumbnail: 'playtourn.webp',
		title: 'PlayTourn',
		jobs: ['Sviluppo App'],
		description:
			'Un bot Discord per creare e gestire in maniera professionale tornei di videogiochi, dal processo di iscrizione, alla gestione delle partite, fino alla creazione di classifiche',
		link: 'https://www.playtourn.com/',
		mainTool: {
			label: 'Node.js',
			icon: 'node.svg'
		},
		images: ['playtourn1.webp', 'playtourn2.webp'],
		primaryTools: [
			{
				label: 'Node.js',
				icon: 'node.svg'
			},
			{
				label: 'TypeScript',
				icon: 'typescript.svg'
			},
			{
				label: 'Mongo DB',
				icon: 'mongodb.svg'
			}
		],
		secondaryTools: [],
		github: ''
	},
	{
		id: 'tombola-online',
		thumbnail: 'tombola.webp',
		title: 'Tombola online',
		jobs: ['Progettazione grafica', 'Sviluppo Backend', 'Sviluppo Frontend'],
		description: 'Un party game dove giocare a tombola con i propri amici e familiari, online collegati o comodamente offline',
		link: 'https://tombola-online.it/',
		mainTool: {
			label: 'Angular',
			icon: 'angular.svg'
		},
		images: ['tombola1.webp', 'tombola2.webp', 'tombola3.webp'],
		primaryTools: [
			{
				label: 'Angular',
				icon: 'angular.svg'
			},
			{
				label: 'Express.js',
				icon: 'express.svg'
			},
			{
				label: 'Figma',
				icon: 'figma.svg'
			}
		],
		secondaryTools: [
			{
				label: 'Mongo DB',
				icon: 'mongodb.svg'
			},
			{
				label: 'Git',
				icon: 'git.svg'
			},
			{
				label: 'Docker',
				icon: 'docker.svg'
			}
		],
		github: 'https://github.com/GiulioPaesani/tombola-online'
	}
];

export default PORTFOLIO_PROJECTS;
