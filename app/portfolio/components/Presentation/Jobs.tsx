import Chips from '@/app/components/Card/Chips';
import SectionTitle from '@/app/components/Header/SectionTitle';

type JobsProps = {
	jobs: string[];
};

const Jobs = ({ jobs }: JobsProps) => {
	return (
		<div>
			<SectionTitle text='A cosa ho lavorato' className='w-fit mb-2' />
			<Chips texts={jobs} type='secondary' />
		</div>
	);
};

export default Jobs;
