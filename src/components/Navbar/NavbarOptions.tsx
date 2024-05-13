import NavbarOption from './NavbarOption';

const NavbarOptions = () => {
	return (
		<div className='items-center ml-auto gap-6 hidden lg:flex'>
			{['Competenze', 'Progetti', 'Istruzione', 'Contatti'].map((option, index) => (
				<NavbarOption option={option} index={index} key={index} />
			))}
		</div>
	);
};

export default NavbarOptions;
