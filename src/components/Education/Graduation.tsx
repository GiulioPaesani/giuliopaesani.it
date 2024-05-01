import Card from '../global/Card';

const Graduation = () => {
	return (
		<Card
			startDate='Set 2023'
			endDate='Giu 2024'
			title='Ingegneria e Scienze Informatiche'
			subTitle='Campus di Cesena - Università di Bologna'
			buttonLabel='Il mio corso'
			buttonLink='https://corsi.unibo.it/laurea/IngegneriaScienzeInformatiche'
			fields={
				<>
					<h2 className='text-2xl text-neutral-50 font-medium mt-8 mb-4'>Lezioni che ho frequentato</h2>
					<div className='flex gap-2 flex-wrap'>
						{['Analisi matematica', 'Programmazione', 'Algebra e Geometria', 'Algoritmi e Strutture dati', 'Architetture degli elaboratori'].map(lesson => (
							<div className='bg-neutral-50 py-1 px-6 rounded-full text-2xl font-medium text-primary-500 mb-2'>{lesson}</div>
						))}
					</div>
					<h2 className='text-2xl text-neutral-50 font-medium mt-8 mb-4'>Perchè ho lasciato l'università?</h2>
					<p className='text-2xl text-neutral-50'>
						Ho capito che l’università non è un mondo che mi appartiene. Non so stare senza fare niente e mi sentivo di star sprecando tempo della mia vita
					</p>
				</>
			}
		/>
	);
};

export default Graduation;
