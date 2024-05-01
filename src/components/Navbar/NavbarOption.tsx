type NavbarOptionProps = {
	option: string;
	index: number;
};

const NavbarOption = ({ option, index }: NavbarOptionProps) => {
	const scrollToSection = (sectionId: string) => {
		const targetSection = document.getElementById(sectionId);

		if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div
			className={`text-lg font-medium text-neutral-950 px-4 py-2 select-none ${
				index === 0 ? 'ml-auto' : ''
			} rounded-lg bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-200 ease-in-out duration-200 cursor-pointer`}
			onClick={() => scrollToSection(option.toLowerCase())}>
			{option}
		</div>
	);
};

export default NavbarOption;
