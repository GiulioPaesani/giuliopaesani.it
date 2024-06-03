'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type Option = {
	label: string;
	path: string;
	icon: string;
};

type NavbarOptionProps = {
	option: Option;
	index: number;
};

const NavbarOption = ({ option, index }: NavbarOptionProps) => {
	const pathname = usePathname();

	return (
		<Link
			href={option.path}
			className={`text-lg font-medium text-neutral-950 px-4 py-2 select-none ${
				index === 0 && 'ml-auto'
			} rounded-lg hover:bg-neutral-100 active:bg-neutral-200 ease-in-out duration-200 cursor-pointer flex gap-2 items-center ${
				pathname === option.path ? 'bg-primary-50' : ''
			}`}>
			{option.label}
			<Image width={24} height={24} src={`./icons/${option.icon}.svg`} alt='' />
		</Link>
	);
};

export default NavbarOption;
