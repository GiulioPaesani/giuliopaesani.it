type CardFieldDescriptionProps = {
	text: string;
	className?: string;
};

const CardFieldDescription = ({ text, className }: CardFieldDescriptionProps) => {
	return <p className={`text-lg sm:text-xl text-neutral-50 ${className ?? ''}`}>{text}</p>;
};

export default CardFieldDescription;
