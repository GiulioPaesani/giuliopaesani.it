import { SetStateAction } from 'react';
import Button from '../Button/Button';
import MobileMenuOptions from './MobileMenuOptions';

type MobileMenuProps = {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: SetStateAction<boolean>) => void;
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
	return (
		<div
			className={`bg-neutral-950/50 fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center ${
				isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
			} ease-in-out duration-200`}>
			<div className='bg-primary-500 rounded-lg max-h-[90vh] p-6 overflow-y-auto flex flex-col gap-4'>
				<Button type='tertiary' icon='x.svg' alt='Chiudi il popup' onClick={() => setIsMenuOpen(false)} className='ml-auto mb-2' />
				<MobileMenuOptions setIsMenuOpen={setIsMenuOpen} />
			</div>
		</div>
	);
};

export default MobileMenu;
