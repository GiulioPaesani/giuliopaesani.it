import { useState } from 'react';
import Button from '../global/Button';

type SocialCardProps = {
	icon: string;
	name: string;
	subTitle?: string;
	link?: string;
};

const SocialCard = ({ icon, name, subTitle, link }: SocialCardProps) => {
	const [isCopied, setCopied] = useState<boolean>(false);

	return (
		<div className='bg-primary-500 p-6 rounded-lg flex items-center w-full max-w-[400px] m-auto'>
			<div>
				<div className='flex items-center w-full'>
					<img width='32px' height='32px' src={`./icons/${icon}`} alt={`Icona di ${icon}`} />
					<span className='text-neutral-50 text-xl font-light ml-4'>{name}</span>
				</div>
				{subTitle && <div className='hidden sm:block text-2xl font-medium text-neutral-50 mt-3'>{!isCopied ? subTitle : 'Email copiata'}</div>}
			</div>
			<Button
				type='tertiary'
				icon={typeof link === 'string' ? 'external-link.svg' : 'copy2.svg'}
				alt={typeof link === 'string' ? `Link al profilo ${name}` : `Copia l'indirizzo mail`}
				onClick={
					typeof link === 'string'
						? link
						: () => {
								navigator.clipboard.writeText('giuliopaesani@gmail.com');
								setCopied(true);
								setTimeout(() => setCopied(false), 1000);
						  }
				}
				className='ml-auto'
			/>
		</div>
	);
};

export default SocialCard;
