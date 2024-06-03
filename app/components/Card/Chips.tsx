import Chip from './Chip';

type ChipsProps = {
	texts: string[];
};

const Chips = ({ texts }: ChipsProps) => {
	return (
		<div className='flex gap-2 flex-wrap'>
			{texts.map((text, index) => (
				<Chip text={text} key={index} />
			))}
		</div>
	);
};

export default Chips;
