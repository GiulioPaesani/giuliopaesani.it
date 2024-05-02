type FieldChipProps = {
	text: string;
};

const FieldChip = ({ text }: FieldChipProps) => {
	return <div className='bg-neutral-50 py-1 px-6 rounded-full text-xl smtext-2xl font-medium text-primary-500 mb-2 w-fit'>{text}</div>;
};

export default FieldChip;
