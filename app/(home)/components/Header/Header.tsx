import ContactMeButton from '@/app/components/Button/ContactMeButton';
import Title from '@/app/components/Header/Title';
// import HiringText from './HiringText';
import Subtitle from './Subtitle';
import Button from '@/app/components/Button/Button';

const Header = () => {
	return (
		<div className='w-full'>
			{/* <HiringText /> */}
			<Title text='Giulio Paesani' text2='Ciao, io sono' />
			<Subtitle />

			<div className='flex gap-4 flex-wrap'>
				<ContactMeButton side='left' />
				<Button type='secondary' label='Download CV' icon='download.svg' alt='Download del curriculum' onClick='Giulio_Paesani_Curriculum.pdf' download={true} />
			</div>
		</div>
	);
};

export default Header;
