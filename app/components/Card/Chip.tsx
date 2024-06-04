import Image from 'next/image';

type ChipProps = {
	text: string;
	icon?: string;
};

const Chip = ({ text, icon }: ChipProps) => {
	return (
		<div className='bg-neutral-50 py-1 px-6 rounded-full text-xl font-medium text-primary-500 mb-2 w-fit flex gap-2 items-center'>
			{icon && <Image src={icon} width={24} height={24} alt='' className='rounded-sm' />}
			{text}
		</div>
	);
};

export default Chip;
