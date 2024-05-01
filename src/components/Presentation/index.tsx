import PersonalDescription from './PersonalDescription';
import PersonalInfos from './PersonalInfos';
import ProfileImage from './ProfileImage';

const Presentation = () => {
	return (
		<div className='flex  gap-40  '>
			<div className='w-full lg:w-1/2'>
				<PersonalDescription />
				<PersonalInfos />
			</div>
			<ProfileImage />
		</div>
	);
};

export default Presentation;
