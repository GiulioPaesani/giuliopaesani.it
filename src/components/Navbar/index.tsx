import ContactMeButton from '../global/ContactMeButton';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
	return (
		<div className='w-full h-20 flex items-center sticky top-0 bg-neutral-50/80 z-50'>
			<NavbarOptions />
			<ContactMeButton className='mr-auto sm:mr-0 sm:ml-auto lg:ml-12' side='right' />
		</div>
	);
};

export default Navbar;
