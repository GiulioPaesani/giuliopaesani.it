import ContactMeButton from '../Button/ContactMeButton';
import NavbarIcon from './NavbarIcon';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
	return (
		<div className='w-full h-20 flex items-center sticky top-0 bg-neutral-50/80'>
			<NavbarIcon />
			<NavbarOptions />
			<ContactMeButton className='ml-auto lg:ml-12' />
		</div>
	);
};

export default Navbar;
