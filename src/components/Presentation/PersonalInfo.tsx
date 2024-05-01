type PersonalInfoProps = {
	label: string;
	value: string;
	icon: string;
};

const PersonalInfo = ({ label, value, icon }: PersonalInfoProps) => {
	return (
		<div className='bg-primary-500 rounded-lg w-fit p-4 text-neutral-50 flex items-center gap-4'>
			<div className='flex items-center gap-1.5 self-start'>
				<img src={`./icons/${icon}`} alt={label} className='size-4' />
				<p className='text-xl text-neutral-50 font-light'>{label}</p>
			</div>
			<p className='text-5xl lg:max-xl:text-3xl text-neutral-50 font-bold'>{value}</p>
		</div>
	);
};

export default PersonalInfo;
