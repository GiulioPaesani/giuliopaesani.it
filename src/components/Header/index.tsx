import Button from '../global/Button';
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

			<div className='flex gap-4 flex-wrap'>
				<ContactMeButton side='left' />
				<Button type='secondary' label='Download CV' icon='download.svg' onClick='Giulio_Paesani_Curriculum.pdf' download={true} />
			</div>
		</div>
	);
};

export default Header;
