type TitleProps = {
	text: string;
	text2?: string;
};

const Title = ({ text, text2 }: TitleProps) => {
	return (
		<>
			{text2 && <h1 className='text-4xl sm:text-6xl text-neutral-950 mb-2'>{text2}</h1>}
			<h1 className='text-6xl sm:text-8xl text-neutral-950 font-bold'>{text}</h1>
		</>
	);
};

export default Title;
