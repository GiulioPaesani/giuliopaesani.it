import SocialCard from './SocialCard';

const SocialCards = () => {
	return (
		<div className='mt-16 flex flex-col gap-8'>
			<SocialCard icon='mail.svg' name='Email' subTitle='giuliopaesani@gmail.com' />
			<div className='flex justify-between gap-8 w-full lg:w-2/3 m-auto'>
				<SocialCard icon='linkedin.svg' name='Linkedin' link='https://www.linkedin.com/in/giulio-paesani-463b291ba/' />
				<SocialCard icon='instagram.svg' name='Instagram' link='https://www.instagram.com/giulio_paesani' />
			</div>
		</div>
	);
};

export default SocialCards;
