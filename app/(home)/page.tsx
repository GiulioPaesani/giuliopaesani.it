import SectionTitle from '../components/Header/SectionTitle';
import Presentation from '../components/Presentation/Presentation';
import Header from './components/Header/Header';
import PersonalInfos from './components/Presentation/PersonalInfos';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

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
						Mi sono trasferito a <strong>Cesena</strong> per l’università, <strong>vivere da solo</strong> e avere grande indipendenza è sempre stato il mio
						sogno più grande. Ho capito però che lo studio non è per me e voglio da ora mettere le mani in pasta
						<br />
						<br />
						Sono un ragazzo intraprendente e sempre pronto a spingersi oltre i propri limiti
					</>
				}
				infos={<PersonalInfos />}
				image='/giuliopaesani.webp'
			/>

			<Skills />

			<Projects />
		</>
	);
};

export default Home;
