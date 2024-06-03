type SectionTitleProps = {
	text: string;
};

const SectionTitle = ({ text }: SectionTitleProps) => {
	return <h3 className='text-center text-3xl font-medium text-neutral-950'>{text}</h3>;
};

export default SectionTitle;
