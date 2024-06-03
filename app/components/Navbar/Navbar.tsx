import ContactMeButton from '../Button/ContactMeButton';
import Menu from './Menu';
import NavbarIcon from './NavbarIcon';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
	return (
		<div className='w-full h-20 flex items-center sticky top-0 bg-neutral-50/80 z-50'>
			<NavbarIcon />
			<NavbarOptions />
			<ContactMeButton className='sm:mr-0 ml-auto lg:ml-12' side='right' />
			<Menu />
		</div>
	);
};

export default Navbar;
