import SocialCard from './SocialCard';

const SocialCards = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SocialCard icon='mail.svg' name='Email' subTitle='giuliopaesani@gmail.com' />
			<div className='flex justify-between gap-8 w-full lg:flex-row flex-col xl:w-2/3 m-auto flex-wrap sm:flex-nowrap'>
				<SocialCard icon='linkedin.svg' name='Linkedin' link='https://www.linkedin.com/in/giulio-paesani/' />
				<SocialCard icon='github.svg' name='GitHub' link='https://github.com/GiulioPaesani' />
				<SocialCard icon='instagram.svg' name='Instagram' link='https://www.instagram.com/giulio_paesani' />
			</div>
		</div>
	);
};

export default SocialCards;
