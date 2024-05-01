import Button from '../Button';
import HiringText from './HiringText';
import Subtitle from './Subtitle';
import Title from './Title';

const Header = () => {
	return (
		<div className='w-full'>
			<HiringText />
			<Title />
			<Subtitle />
			<Button type='primary' label='Contattami' icon='mail.svg' onClick={() => {}} />
		</div>
	);
};

export default Header;
