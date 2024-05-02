import { useState } from 'react';

type ContactMeButtonProps = {
	className?: string;
	side: 'right' | 'left';
};

const ContactMeButton = ({ className, side }: ContactMeButtonProps) => {
	const [isHover, setHover] = useState<boolean>(false);
	const [isCopied, setCopied] = useState<boolean>(false);

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={() => {
				navigator.clipboard.writeText('giuliopaesani@gmail.com');
				setCopied(true);
				setHover(true);
				setTimeout(() => {
					setCopied(false);
					setHover(false);
				}, 1000);
			}}
			className={`${
				className ?? ''
			} w-fit text-xl font-medium py-2 px-6 rounded-lg cursor-pointer flex gap-2 select-none text-neutral-50 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 ease-in-out duration-200 group overflow-hidden`}>
			<div className={`h-7 w-[100px]  sm:group-hover:-translate-y-9  sm:group-hover:w-60 ease-in-out duration-200 flex flex-col`}>
				<div className={`mb-2 ${side === 'right' ? 'self-end' : 'self-start'} ${isCopied && 'hidden sm:block'}`}>Contattami</div>
				<div className={`${isCopied && 'block'} sm:hidden`}>Copiato</div>
				<div className={`${side === 'right' ? 'self-end' : 'self-start'} hidden sm:block`}>{!isCopied ? 'giuliopaesani@gmail.com' : 'Email copiata'}</div>
			</div>
			<img src={!isHover ? './icons/mail.svg' : './icons/copy.svg'} alt='Contattami' />
		</div>
	);
};

export default ContactMeButton;
