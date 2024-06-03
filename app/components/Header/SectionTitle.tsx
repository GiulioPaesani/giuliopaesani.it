type SectionTitleProps = {
	text: string;
	className?: string;
};

const SectionTitle = ({ text, className }: SectionTitleProps) => {
	return <h3 className={`text-center text-3xl font-medium text-neutral-950 ${className ?? ''}`}>{text}</h3>;
};

export default SectionTitle;
