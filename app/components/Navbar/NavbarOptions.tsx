import NavbarOption, { Option } from './NavbarOption';

const OPTIONS: Option[] = [
	{
		label: 'Chi sono',
		path: '/',
		icon: 'me'
	},
	{
		label: 'Portfolio',
		path: '/portfolio',
		icon: 'portfolio'
	}
];

const NavbarOptions = () => {
	return (
		<div className='items-center ml-auto gap-6 hidden lg:flex'>
			{OPTIONS.map((option, index) => (
				<NavbarOption option={option} index={index} key={index} />
			))}
		</div>
	);
};

export default NavbarOptions;
