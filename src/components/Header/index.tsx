import ContactMeButton from '../global/ContactMeButton';
import HiringText from './HiringText';
import Subtitle from './Subtitle';
import Title from './Title';

const Header = () => {
	return (
		<div id='header' className='w-full'>
			<HiringText />
			<Title />
			<Subtitle />
			<ContactMeButton side='left' />
		</div>
	);
};

export default Header;
