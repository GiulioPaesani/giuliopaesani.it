import Title from '@/app/components/Header/Title';

type HeaderProps = {
	text: string;
};

const Header = ({ text }: HeaderProps) => {
	return (
		<div className='mt-8 text-center'>
			<Title text={text} />
		</div>
	);
};

export default Header;
