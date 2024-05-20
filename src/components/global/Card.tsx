import Button from './Button';

type CardProps = {
	startDate: string;
	endDate: string | null;
	onClickCloseButton?: () => any;
	title: string;
	subTitle: string;
	buttonLabel: string;
	buttonLink: string;
	thumbnail?: string;
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
			<h2 className='text-3xl font-medium text-neutral-50 my-2'>{title}</h2>
			<h3 className='text-2xl font-light text-neutral-50'>{subTitle}</h3>
			{thumbnail && <div className='w-full h-36 smh-48 rounded-lg bg-cover bg-center my-6' style={{ backgroundImage: `url("${thumbnail}")` }}></div>}
			{fields}
			<Button type='tertiary' label={buttonLabel} icon='external-link.svg' alt='Maggiori informazioni' onClick={buttonLink} className='mt-12' />
		</div>
	);
};

export default Card;
