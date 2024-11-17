import Card from '@/app/components/Card/Card';
import CardFieldDescription from '@/app/components/Card/CardFieldDescription';
import CardFieldTitle from '@/app/components/Card/CardFieldTitle';
import Chips from '@/app/components/Card/Chips';

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
					<CardFieldTitle text='Esami che ho passato' />
					<Chips texts={['Analisi matematica', 'Programmazione']} />
					<CardFieldTitle text={`Perchè ho lasciato l'università?`} />
					<CardFieldDescription
						text={`Ho capito che l'università non è un mondo che mi appartiene. Non so stare senza fare niente e mi sentivo di star sprecando tempo della mia vita. Voglio fare e fare, senza troppa routine`}
					/>
				</>
			}
		/>
	);
};

export default Graduation;
