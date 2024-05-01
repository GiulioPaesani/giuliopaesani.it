import PersonalInfo from './PersonalInfo';

const PersonalInfos = () => {
	return (
		<div className='flex gap-3 sm:gap-9 lg:max-xl:gap-4 flex-col sm:flex-row'>
			<PersonalInfo label='Età' value='19' icon='calendar.svg' />
			<PersonalInfo label='Posizione' value='Cesena' icon='map-pin.svg' />
		</div>
	);
};

export default PersonalInfos;
