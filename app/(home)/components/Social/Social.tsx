import SectionTitle from '@/app/components/Header/SectionTitle';
import SocialCards from './SocialCards';

const Social = () => {
	return (
		<div id='contatti'>
			<SectionTitle text='Social e contatti' className='block mb-36' />
			<SocialCards />
		</div>
	);
};

export default Social;
