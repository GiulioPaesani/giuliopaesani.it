import { Metadata } from 'next';
import Presentation from '../components/Presentation/Presentation';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import PersonalInfos from './components/Presentation/PersonalInfos';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Social from './components/Social/Social';

export const metadata: Metadata = {
	metadataBase: new URL('https://giuliopaesani.it'),
	title: 'Giulio Paesani',
	description: 'Giulio Paesani - Web developer',
	keywords:
		'Giulio, Giulio Paesani, Paesani Giulio, Sviluppatore web, Web developer, Frontend developer, Front-end developer, Sviluppatore Front-end, frontend, Cesena, Forlì Cesena',
	icons: '/icon.ico',
	manifest: '/manifest.json',
	openGraph: {
		title: 'Giulio Paesani',
		description: 'Web developer',
		images: '/homePreview.webp',
		url: '/',
		locale: 'it',
		siteName: 'Giulio Paesani'
	}
};

const Home = () => {
	return (
		<>
			<Header />
			<Presentation
				description={
					<>
						Sono da sempre appassionato alla <strong>programmazione</strong>, nello sviluppo web in particolare
						<br />
						<br />
						Mi sono trasferito a <strong>lontano</strong> dai miei genitori per l’università, <strong>vivere da solo</strong> e avere grande indipendenza è
						sempre stato il mio sogno più grande. Ho capito però che lo studio non è per me e non riesco a stare fermo
						<br />
						<br />
						Sono un ragazzo intraprendente, sempre pronto a spingersi oltre i propri limiti e con tanta <strong>voglia di fare</strong>
					</>
				}
				infos={<PersonalInfos />}
				image='/giuliopaesani.webp'
			/>
			<Skills />
			<Projects />
			<Education />
			<Social />
		</>
	);
};

export default Home;
