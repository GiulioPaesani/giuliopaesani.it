import { ReactNode } from 'react';

type PresentationDescriptionProps = {
	text: ReactNode;
};

const PresentationDescription = ({ text }: PresentationDescriptionProps) => {
	return <p className='text-xl text-neutral-950 mb-6'>{text}</p>;
};

export default PresentationDescription;
