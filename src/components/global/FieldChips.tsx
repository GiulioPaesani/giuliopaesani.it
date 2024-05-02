import FieldChip from './FieldChip';

type FieldChipsProps = {
	texts: string[];
};

const FieldChips = ({ texts }: FieldChipsProps) => {
	return (
		<div className='flex gap-2 flex-wrap'>
			{texts.map(text => (
				<FieldChip text={text} />
			))}
		</div>
	);
};

export default FieldChips;
