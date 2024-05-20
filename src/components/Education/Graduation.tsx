import Card from '../global/Card';
import FieldChips from '../global/FieldChips';
import FieldDescription from '../global/FieldDescription';
import FieldTitle from '../global/FieldTitle';

const Graduation = () => {
	return (
		<Card
			startDate='Set 2023'
			endDate='Apr 2024'
			title='Ingegneria e Scienze Informatiche'
			subTitle='Campus di Cesena - Università di Bologna'
			buttonLabel='Il mio corso'
			buttonLink='https://corsi.unibo.it/laurea/IngegneriaScienzeInformatiche'
			fields={
				<>
					<FieldTitle text='Lezioni che ho frequentato' />
					<FieldChips texts={['Analisi matematica', 'Programmazione', 'Algebra e Geometria', 'Algoritmi e Strutture dati', 'Architetture degli elaboratori']} />
					<FieldTitle text={`Perchè ho lasciato l'università?`} />
					<FieldDescription
						text={`Ho capito che l'università non è un mondo che mi appartiene. Non so stare senza fare niente e mi sentivo di star sprecando tempo della mia vita. Voglio crescere professionalmente e fare esperienza sul campo`}
					/>
				</>
			}
		/>
	);
};

export default Graduation;
