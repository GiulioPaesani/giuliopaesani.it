import { Metadata } from 'next';
import Button from './components/Button/Button';
import Title from './components/Header/Title';

export const metadata: Metadata = {
	title: '404 Not Found',
	icons: '/icon.ico'
};

export default function NotFound() {
	return (
		<div>
			<Title text='404 Not Found' text2='Dove sei finito?' />

			<Button type='primary' label='Torna alla home' icon='home.svg' onClick='/' alt='Torna alla home' className='mt-9' />
		</div>
	);
}
