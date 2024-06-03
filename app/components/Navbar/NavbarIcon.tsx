import Image from 'next/image';

const NavbarIcon = () => {
	return (
		<div className='flex items-center gap-4'>
			<Image src='/icon.webp' alt='Giulio Paesani' width={48} height={48} className='rounded-full' />
			<span className='text-xl font-medium text-neutral-950 hidden sm:block'>Giulio Paesani</span>
		</div>
	);
};

export default NavbarIcon;
