'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

type PresentationImageProps = {
	image: string | string[];
};

const PresentationImage = ({ image }: PresentationImageProps) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [changeTimeout, setChangeTimeout] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (changeTimeout) clearTimeout(changeTimeout);

		const timeout = setTimeout(() => {
			setCurrentImage(currentImage >= image.length - 1 ? 0 : currentImage + 1);
		}, 10000);

		setChangeTimeout(timeout);
	}, [currentImage]);

	if (typeof image === 'string') {
		return (
			<div className='w-1/2 rounded-lg hidden lg:block overflow-hidden'>
				<Image src={image} width={1920} height={1080} alt={image.split('.').slice(0, -1).join('.')} className='object-cover w-full h-full' />
			</div>
		);
	} else {
		return (
			<div className='w-1/2 hidden lg:block relative'>
				<div className='rounded-lg overflow-hidden h-96 relative'>
					{image.map((x, index) => (
						<Image
							key={index}
							src={`/${x}`}
							width={1920}
							height={1080}
							alt={x.split('.').slice(0, -1).join('.')}
							className={`absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-300 ${
								currentImage === index ? 'opacity-100' : 'opacity-0'
							}`}
						/>
					))}
				</div>
				<div className='w-full h-5 flex justify-center gap-2 mt-2'>
					{image.map((x, index) => (
						<button
							key={index}
							className={`size-6 rounded-full transition-all ease-in-out duration-200 bg-primary-200 overflow-hidden ${
								currentImage === index ? 'w-12' : ''
							}`}
							onClick={() => setCurrentImage(index)}>
							<div
								className={`h-full rounded-full bg-primary-500 transition-all duration-[10000ms] ${
									currentImage === index ? 'w-full' : 'w-0 duration-0'
								}`}></div>
						</button>
					))}
				</div>
				<Button
					type='primary'
					icon='back.svg'
					onClick={() => setCurrentImage(currentImage <= 0 ? 0 : currentImage - 1)}
					alt={`Possa all'immagine precedente`}
					className={`absolute top-[170px] -left-[22px] ${currentImage <= 0 ? 'hidden' : ''}`}
				/>
				<Button
					type='primary'
					icon='next.svg'
					onClick={() => setCurrentImage(currentImage >= image.length - 1 ? image.length - 1 : currentImage + 1)}
					alt={`Possa all'immagine successiva`}
					className={`absolute top-[170px] -right-[22px] ${currentImage >= image.length - 1 ? 'hidden' : ''}`}
				/>
			</div>
		);
	}
};

export default PresentationImage;
