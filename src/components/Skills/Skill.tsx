type SkillProps = {
	label: string;
	icon: string;
};

const Skill = ({ label, icon }: SkillProps) => {
	return (
		<div id='competenze' className=' w-64 h-36 relative mb-4'>
			<div className='bg-primary-500 w-full h-[104px] absolute bottom-0 rounded-lg'></div>
			<div className='w-full h-full absolute bottom-0 '>
				<img src={`./${icon}`} alt={label} className='m-auto' />
				<p className='text-3xl text-neutral-50 text-center my-4'>{label}</p>
			</div>
		</div>
	);
};

export default Skill;
