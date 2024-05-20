type FieldChipProps = {
	text: string;
	icon?: string;
};

const FieldChip = ({ text, icon }: FieldChipProps) => {
	return (
		<div className='bg-neutral-50 py-1 px-6 rounded-full text-xl smtext-2xl font-medium text-primary-500 mb-2 w-fit flex gap-2 items-center'>
			{icon && <img src={icon} alt='' className='size-6 rounded-sm' />}
			{text}
		</div>
	);
};

export default FieldChip;
