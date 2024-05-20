import Button from '../global/Button';
import FieldChip from '../global/FieldChip';

type PortfolioProjectProps = {
	title: string;
	description: string;
	thumbnail: string;
	url: string;
	githubUrl: string;
	technology: string;
	inProgress?: boolean;
};

const PortfolioProject = ({ title, description, thumbnail, url, githubUrl, technology, inProgress }: PortfolioProjectProps) => {
	return (
		<div className='w-[416px] p-3 bg-primary-500 rounded-lg flex flex-col gap-4'>
			<div style={{ backgroundImage: `url(${thumbnail})` }} className='w-full h-36 bg-primary-200 bg-cover bg-center rounded-md' />
			<div className='w-full flex justify-between'>
				<h3 className='text-2xl font-medium text-neutral-50'>{title}</h3>
				<FieldChip text={technology} icon={`${technology.toLowerCase()}.svg`} />
			</div>

			{inProgress && (
				<div className='text-base text-[#ffaa00] flex gap-2 items-center'>
					<div className='size-2 bg-[#ffaa00] rounded-full inProgressAnimation mx-1'></div>
					Ancora in sviluppo...
				</div>
			)}
			<p className='text-neutral-50 text-lg mb-8'>{description}</p>

			<div className='w-full flex gap-2 mt-auto'>
				<Button type='secondary' label='Visita' icon='external-link.svg' onClick={url} alt={`Visita il progetto ${title}`} />
				<Button type='primary' icon='github.svg' onClick={githubUrl} alt={`Progetto ${title} su Github`} />
			</div>
		</div>
	);
};

export default PortfolioProject;
