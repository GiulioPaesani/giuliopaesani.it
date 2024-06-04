import Title from '@/app/components/Header/Title';

type HeaderProps = {
	text: string;
};

const Header = ({ text }: HeaderProps) => {
	return (
		<div className='mx-auto w-fit mt-8'>
			<Title text={text} />
		</div>
	);
};

export default Header;
