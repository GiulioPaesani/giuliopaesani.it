import Image from 'next/image';
import Button from '../Button/Button';
import CardSubtitle from './CardSubtitle';
import CardTitle from './CardTitle';

type CardProps = {
	startDate: string;
	endDate: string | null;
	onClickCloseButton?: () => any;
	title: string;
	subTitle: string;
	buttonLabel: string | null;
	buttonLink: string | null;
	thumbnail?: string | null;
	fields?: JSX.Element;
};

const Card = ({ startDate, endDate, onClickCloseButton, title, subTitle, buttonLabel, buttonLink, thumbnail, fields }: CardProps) => {
	return (
		<div className={`bg-primary-500 rounded-lg ${onClickCloseButton ? 'w-4/5 lg:w-2/5 max-h-[90vh]' : 'w-full'} p-6 overflow-y-auto`}>
			<div className='flex items-center gap-2'>
				<span className='text-xl font-light text-neutral-50'>{startDate}</span>
				<div className='size-1 bg-neutral-50 rounded-full'></div>
				<span className='text-xl font-light text-neutral-50'>{endDate ?? 'Presente'}</span>

				{onClickCloseButton && <Button type='tertiary' icon='x.svg' alt='Chiudi il popup' onClick={onClickCloseButton} className='ml-auto' />}
			</div>
			<CardTitle text={title} />
			<CardSubtitle text={subTitle} />
			{thumbnail && (
				<Image
					width={1920}
					height={144}
					className='w-full h-36 smh-48 rounded-lg object-cover bg-center my-6 loadingAnimation'
					src={`/${thumbnail}`}
					alt={title}
				/>
			)}
			{fields}
			{buttonLabel && buttonLink && (
				<Button
					type='tertiary'
					label={buttonLabel}
					icon={!buttonLink.startsWith('/') ? 'external-link.svg' : ''}
					alt='Maggiori informazioni'
					onClick={buttonLink}
					className='mt-12'
				/>
			)}
		</div>
	);
};

export default Card;
