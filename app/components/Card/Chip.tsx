import Image from 'next/image';

type ChipProps = {
	type?: 'primary' | 'secondary';
	text: string;
	icon?: string;
};

const Chip = ({ type, text, icon }: ChipProps) => {
	return (
		<div
			className={`py-1 px-6 rounded-full text-xl font-medium  mb-2 w-fit flex gap-2 items-center ${
				!type || type === 'primary' ? 'bg-neutral-50 text-primary-500' : 'bg-primary-500 text-neutral-50'
			}`}>
			{icon && <Image src={icon} width={24} height={24} alt='' className='rounded-sm' />}
			{text}
		</div>
	);
};

export default Chip;
