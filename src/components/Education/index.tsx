import Graduation from './Graduation';
import HighSchool from './HighSchool';

const Education = () => {
	return (
		<div id='istruzione'>
			<h3 className='text-center text-3xl font-medium text-neutral-950 block xl:hidden'>Istruzione</h3>
			<div className='flex gap-40'>
				<div className='w-full xl:w-1/2 hidden xl:block'>
					<h3 className='text-center text-3xl font-medium text-neutral-950'>Istruzione</h3>
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
