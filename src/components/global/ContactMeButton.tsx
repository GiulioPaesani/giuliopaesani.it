import { useState } from 'react';

type ContactMeButtonProps = {
	className?: string;
};

const ContactMeButton = ({ className }: ContactMeButtonProps) => {
	const [isHover, setHover] = useState(false);
	const [isCopied, setCopied] = useState(false);

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={() => {
				navigator.clipboard.writeText('giuliopaesani@gmail.com');
				setCopied(true);
				setTimeout(() => setCopied(false), 1000);
			}}
			className={`${
				className ?? ''
			} w-fit text-xl font-medium py-2 px-6 rounded-lg cursor-pointer flex gap-2 select-none text-neutral-50 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 ease-in-out duration-200 overflow-hidden group`}>
			<div className={`h-7 w-[100px] ${isHover ? '' : ''} group-hover:-translate-y-9 group-hover:w-60 ease-in-out duration-200`}>
				<div className='mb-2'>Contattami</div>
				<div>{!isCopied ? 'giuliopaesani@gmail.com' : 'Email copiata'}</div>
			</div>
			<img src={!isHover ? './icons/mail.svg' : './icons/copy.svg'} alt='Contattami' />
		</div>
	);
};

export default ContactMeButton;