type CardFieldTitleProps = {
	text: string;
};

const CardFieldTitle = ({ text }: CardFieldTitleProps) => {
	return <h2 className='text-xl sm:text-2xl text-neutral-50 font-medium mt-8 mb-4'>{text}</h2>;
};
export default CardFieldTitle;
