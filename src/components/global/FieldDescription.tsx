type FieldDescriptionProps = {
	text: string;
};

const FieldDescription = ({ text }: FieldDescriptionProps) => {
	return <p className='text-lg smtext-xl text-neutral-50'>{text}</p>;
};

export default FieldDescription;
