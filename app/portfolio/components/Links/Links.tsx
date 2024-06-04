import SocialCard from '../../../components/Card/SocialCard';

type LinksProps = {
	link: string;
	github: string | null;
};

const Links = ({ link, github }: LinksProps) => {
	return (
		<div className='flex justify-between gap-8 w-full lg:flex-row flex-col xl:w-2/3 m-auto flex-wrap sm:flex-nowrap'>
			<SocialCard icon='icons/link.svg' name='Visita' link={link} />
			{github && <SocialCard icon='github.svg' name='GitHub' link={github} />}
		</div>
	);
};

export default Links;
