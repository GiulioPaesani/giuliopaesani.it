import { SetStateAction } from 'react';
import MobileMenuOption from './MobileMenuOption';
import { OPTIONS } from './NavbarOptions';

type MobileMenuOptionsProps = {
	setIsMenuOpen: (value: SetStateAction<boolean>) => void;
};

const MobileMenuOptions = ({ setIsMenuOpen }: MobileMenuOptionsProps) => {
	return (
		<div className='items-center gap-4 flex flex-col'>
			{OPTIONS.map((option, index) => (
				<MobileMenuOption option={option} index={index} key={index} setIsMenuOpen={setIsMenuOpen} />
			))}
		</div>
	);
};

export default MobileMenuOptions;
