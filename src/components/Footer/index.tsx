import Button from '../global/Button';

const Footer = () => {
	return (
		<div>
			<p className='text-center text-xl text-neutral-700'>Sito progettato e realizzato da me</p>
			<Button
				type='secondary'
				label='GitHub'
				icon='external-link.svg'
				alt='Link alla repository GitHub del sito'
				onClick='https://github.com/GiulioPaesani/giuliopaesani.it'
				className='m-auto mt-2'
			/>
		</div>
	);
};

export default Footer;
