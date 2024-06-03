'use client';

import { useState } from 'react';
import Button from '../Button/Button';
import MobileMenu from './MobileMenu';

const Menu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true);

	return (
		<div className='block lg:hidden ml-4'>
			<Button type='tertiary' icon='menu.svg' onClick={() => setIsMenuOpen(true)} alt='Apri menu' />
			<MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</div>
	);
};

export default Menu;
