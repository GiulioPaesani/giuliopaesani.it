import Chip from './Chip';

type ChipsProps = {
	type?: 'primary' | 'secondary';
	texts: string[];
};

const Chips = ({ type, texts }: ChipsProps) => {
	return (
		<div className='flex gap-2 flex-wrap'>
			{texts.map((text, index) => (
				<Chip type={type} text={text} key={index} />
			))}
		</div>
	);
};

export default Chips;
