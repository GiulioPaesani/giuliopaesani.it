export const scrollToSection = (sectionId: string) => {
	const targetSection = document.getElementById(sectionId);

	if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

type NavbarOptionProps = {
	option: string;
	index: number;
};

const NavbarOption = ({ option, index }: NavbarOptionProps) => {
	return (
		<div
			className={`text-lg font-medium text-neutral-950 px-4 py-2 select-none ${
				index === 0 && 'ml-auto'
			} rounded-lg  hover:bg-neutral-100 active:bg-neutral-200 ease-in-out duration-200 cursor-pointer`}
			onClick={() => scrollToSection(option.toLowerCase())}>
			{option}
		</div>
	);
};

export default NavbarOption;
