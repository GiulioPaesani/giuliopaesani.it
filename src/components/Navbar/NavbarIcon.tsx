import { scrollToSection } from './NavbarOption';

const NavbarIcon = () => {
	return <img src='./favicon.ico' alt='Giulio Paesani Icon' className='size-12 bg-primary-500 rounded-full' onClick={() => scrollToSection('header')} />;
};

export default NavbarIcon;
