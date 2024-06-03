import Card from '@/app/components/Card/Card';
import CardFieldTitle from '@/app/components/Card/CardFieldTitle';

const HighSchool = () => {
	return (
		<Card
			startDate='Set 2018'
			endDate='Giu 2023'
			title='Istituto Tecnico - Informatica'
			subTitle='ITTS Rimini O. Belluzzi - L. Da Vinci'
			buttonLabel='La mia scuola'
			buttonLink='https://www.ittsrimini.edu.it/'
			fields={
				<>
					<CardFieldTitle text={`Valutazione: 100/100`} />
				</>
			}
		/>
	);
};

export default HighSchool;
