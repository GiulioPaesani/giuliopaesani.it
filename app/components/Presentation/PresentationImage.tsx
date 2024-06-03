import Image from 'next/image';

type PresentationImageProps = {
	image: string | string[];
};

const PresentationImage = ({ image }: PresentationImageProps) => {
	if (typeof image === 'string') {
		return (
			<div className='w-1/2 rounded-lg hidden lg:block overflow-hidden'>
				<Image src={image} width={1920} height={1080} alt={image.split('.').slice(0, -1).join('.')} className='object-cover w-full h-full' />
			</div>
		);
	} else {
		return <div>DA FARE</div>;
	}
};

export default PresentationImage;
