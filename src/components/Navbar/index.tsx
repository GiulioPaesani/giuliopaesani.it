import Button from '../Button';
import NavbarIcon from './NavbarIcon';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
	return (
		<div className='w-full h-20 flex items-center sticky top-0'>
			<NavbarIcon />
			<NavbarOptions />
			<Button type='primary' label='Contattami' icon='mail.svg' onClick={() => {}} className='ml-auto lg:ml-12' />
		</div>
	);
};

export default Navbar;
