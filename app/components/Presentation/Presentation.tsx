import PresentationDescription from './PresentationDescription';
import PresentationImage from './PresentationImage';
import { ReactNode } from 'react';

type PresentationProps = {
	description: ReactNode;
	infos: ReactNode;
	image: string | string[];
};

const Presentation = ({ description, infos, image }: PresentationProps) => {
	return (
		<div className='flex gap-40'>
			<div className='w-full lg:w-1/2 flex flex-col justify-between'>
				<PresentationDescription text={description} />
				{infos}
			</div>
			<PresentationImage image={image} />
		</div>
	);
};

export default Presentation;
