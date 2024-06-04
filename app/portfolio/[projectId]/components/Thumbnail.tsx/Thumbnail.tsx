import Button from '@/app/components/Button/Button';
import Image from 'next/image';

type ThumbnailProps = {
	thumbnail: string;
	alt: string;
};

const Thumbnail = ({ thumbnail, alt }: ThumbnailProps) => {
	return (
		<div className='relative mx-auto w-full md:w-3/4 h-56 md:h-80'>
			<Button type='primary' label='Altri progetti' icon='back.svg' onClick='/portfolio' alt='Tutto il mio portfolio' className='absolute -top-[22px] left-8' />
			<div className='w-full h-full rounded-lg overflow-hidden'>
				<Image src={`/${thumbnail}`} width={1920} height={1080} className='w-full h-full object-cover' alt={alt} />
			</div>
		</div>
	);
};

export default Thumbnail;
