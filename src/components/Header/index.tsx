import ContactMeButton from '../Button/ContactMeButton';
import HiringText from './HiringText';
import Subtitle from './Subtitle';
import Title from './Title';

const Header = () => {
	return (
		<div className='w-full'>
			<HiringText />
			<Title />
			<Subtitle />
			<ContactMeButton />
		</div>
	);
};

export default Header;
