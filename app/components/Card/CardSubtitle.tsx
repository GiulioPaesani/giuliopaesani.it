type CardSubtitleProps = {
	text: string;
};

const CardSubtitle = ({ text }: CardSubtitleProps) => {
	return <h3 className='text-2xl font-light text-neutral-50'>{text}</h3>;
};

export default CardSubtitle;
