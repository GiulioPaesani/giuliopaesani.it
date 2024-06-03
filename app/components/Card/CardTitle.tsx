type CardTitleProps = {
	text: string;
};

const CardTitle = ({ text }: CardTitleProps) => {
	return <h2 className='text-3xl font-medium text-neutral-50 my-2'>{text}</h2>;
};

export default CardTitle;
