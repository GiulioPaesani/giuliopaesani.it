'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SetStateAction } from 'react';

export type Option = {
	label: string;
	path: string;
	icon: string;
};

type MobileMenuOptionProps = {
	option: Option;
	index: number;
	setIsMenuOpen: (value: SetStateAction<boolean>) => void;
};

const MobileMenuOption = ({ option, index, setIsMenuOpen }: MobileMenuOptionProps) => {
	const pathname = usePathname();

	return (
		<Link
			onClick={() => setIsMenuOpen(false)}
			href={option.path}
			className={`text-3xl font-medium px-8 py-4 select-none w-64 ${
				index === 0 && 'ml-auto'
			} rounded-lg ease-in-out duration-200 cursor-pointer flex gap-2 items-center justify-between ${
				pathname === option.path
					? 'bg-neutral-50 text-primary-500 hover:bg-neutral-100 active:bg-neutral-200'
					: 'text-neutral-50 hover:bg-primary-600 active:bg-primary-700'
			}`}>
			{option.label}
			<Image width={40} height={40} src={`/icons/${option.icon}${pathname === option.path ? '2' : '3'}.svg`} alt='' />
		</Link>
	);
};

export default MobileMenuOption;
