type ButtonProps = {
	type: 'primary' | 'secondary' | 'tertiary';
	label?: string;
	icon?: string;
	className?: string;
	onClick: string | (() => any);
};

const Button = ({ type, label, icon, className, onClick }: ButtonProps) => {
	const buttonClasses = `${className ?? ''} w-fit text-xl font-medium ${
		label ? 'py-2 px-6' : 'py-2.5 px-2.5'
	} rounded-lg cursor-pointer flex gap-2 select-none ease-in-out duration-200 ${
		type === 'primary'
			? 'text-neutral-50 bg-primary-500 hover:bg-primary-600 active:bg-primary-700'
			: 'text-primary-500 bg-neutral-50 hover:bg-primary-50 active:bg-primary-100'
	} ${type === 'secondary' ? 'border-primary-500 hover:border-primary-600 active:border-primary-700 border-2' : ''}`;

	const buttonContent = (
		<>
			{label ?? ''}
			{icon ? <img src={`./icons/${icon}`} alt={label ?? icon.split('.')[0]} /> : ''}
		</>
	);

	if (typeof onClick === 'string') {
		return (
			<a href={onClick} className={buttonClasses}>
				{buttonContent}
			</a>
		);
	} else {
		return (
			<div onClick={onClick} className={buttonClasses}>
				{buttonContent}
			</div>
		);
	}
};

export default Button;
