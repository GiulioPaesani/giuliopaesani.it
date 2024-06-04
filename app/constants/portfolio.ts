import { PortfolioProject } from '../portfolio/components/Projects/Project';

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
	{
		id: 'jiulien',
		thumbnail: 'jiulien.webp',
		title: 'Jiulien',
		jobs: ['Progettazione grafica', 'Sviluppo App'],
		description: 'Uno strumento essenziale per tutte le community Discord, funzioni base utili per la gestione di un server tra comodità e divertimento',
		link: 'https://jiulien.com/',
		mainTechnology: {
			name: 'Node.js',
			icon: 'node.svg'
		}
	},
	{
		id: 'playtourn',
		thumbnail: 'playtourn.webp',
		title: 'PlayTourn',
		jobs: ['Sviluppo App'],
		description:
			'Un bot Discord per creare e gestire in maniera professionale tornei di videogiochi, dal processo di iscrizione, alla gestione delle partite, fino alla creazione di classifiche',
		link: 'https://www.playtourn.com/',
		mainTechnology: {
			name: 'Node.js',
			icon: 'node.svg'
		}
	},
	{
		id: 'tombola-online',
		thumbnail: 'tombola.webp',
		title: 'Tombola online',
		jobs: ['Progettazione grafica', 'Sviluppo Backend', 'Sviluppo Frontend'],
		description: 'Un party game dove giocare a tombola con i propri amici e familiari, online collegati o comodamente offline',
		link: 'https://tombola-online.it/',
		mainTechnology: {
			name: 'Angular',
			icon: 'angular.svg'
		}
	}
];

export default PORTFOLIO_PROJECTS;
