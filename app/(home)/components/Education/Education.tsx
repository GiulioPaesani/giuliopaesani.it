import SectionTitle from '@/app/components/Header/SectionTitle';
import Graduation from './Graduation';
import HighSchool from './HighSchool';

const Education = () => {
	return (
		<div>
			<SectionTitle text='Istruzione' className='block xl:hidden mb-36' />
			<div className='flex gap-40'>
				<div className='w-full xl:w-1/2 hidden xl:block'>
					<SectionTitle text='Istruzione' />
				</div>
				<div className='w-full xl:w-1/2 relative'>
					<Graduation />
					<div className='relative ml-8 my-4'>
						<div className='size-8 rounded-full bg-primary-500 absolute -left-3 -top-1'></div>
						<div className='border-l-8 border-primary-500 h-24'></div>
						<div className='size-8 rounded-full bg-primary-500 absolute -left-3 -bottom-1'></div>
					</div>
					<HighSchool />
				</div>
			</div>
		</div>
	);
};

export default Education;
