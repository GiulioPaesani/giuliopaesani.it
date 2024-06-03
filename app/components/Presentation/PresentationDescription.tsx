import { ReactNode } from 'react';

type PresentationDescriptionProps = {
	text: ReactNode;
};

const PresentationDescription = ({ text }: PresentationDescriptionProps) => {
	return (
		<p className='text-xl text-neutral-950 mb-6'>
			{text}
			{/* Sono da sempre appassionato alla <strong>programmazione</strong>, nello sviluppo web in particolare
			<br />
			<br />
			Mi sono trasferito a <strong>Cesena</strong> per l’università, <strong>vivere da solo</strong> e avere grande indipendenza è sempre stato il mio sogno più
			grande. Ho capito però che lo studio non è per me e voglio da ora mettere le mani in pasta
			<br />
			<br />
			Sono un ragazzo intraprendente e sempre pronto a spingersi oltre i propri limiti */}
		</p>
	);
};

export default PresentationDescription;
