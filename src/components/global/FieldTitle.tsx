type FieldTitleProps = {
	text: string;
};

const FieldTitle = ({ text }: FieldTitleProps) => {
	return <h2 className='text-xl smtext-2xl text-neutral-50 font-medium mt-8 mb-4'>{text}</h2>;
};
export default FieldTitle;
