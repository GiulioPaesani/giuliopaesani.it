type CardFieldDescriptionProps = {
	text: string;
};

const CardFieldDescription = ({ text }: CardFieldDescriptionProps) => {
	return <p className='text-lg sm:text-xl text-neutral-50'>{text}</p>;
};

export default CardFieldDescription;
