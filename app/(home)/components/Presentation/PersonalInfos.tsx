import PersonalInfo from './PersonalInfo';

const calcAge = () => {
	const birthday = new Date(2004, 7, 20);
	const today = new Date();

	let years = today.getFullYear() - birthday.getFullYear();
	let months = today.getMonth() - birthday.getMonth();
	let days = today.getDate() - birthday.getDate();

	if (months < 0 || (months === 0 && days < 0)) {
		years--;
	}

	return years.toString();
};

const PersonalInfos = () => {
	return (
		<div className='flex gap-3 sm:gap-9 lg:max-xl:gap-4 flex-col sm:flex-row'>
			<PersonalInfo label='Età' value={calcAge()} icon='calendar.svg' />
			<PersonalInfo label='Posizione' value='Cesena' icon='map-pin.svg' />
		</div>
	);
};

export default PersonalInfos;
