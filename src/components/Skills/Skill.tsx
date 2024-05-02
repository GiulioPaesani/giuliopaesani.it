type SkillProps = {
	label: string;
	icon: string;
};

const Skill = ({ label, icon }: SkillProps) => {
	return (
		<div id='competenze' className=' w-64 h-36 relative mb-4 group ease-in-out duration-200 hover:-translate-y-3'>
			<div className='bg-primary-500 w-full h-[104px] absolute bottom-0 rounded-lg'></div>
			<div className='w-full h-full absolute bottom-0 '>
				<img src={`./${icon}`} alt={label} className='m-auto ease-in-out duration-200 group-hover:-rotate-6 group-hover:-translate-y-1' />
				<p className='text-3xl text-neutral-50 text-center my-4 ease-in-out duration-200 group-hover:rotate-3 group-hover:-translate-y-1'>{label}</p>
			</div>
		</div>
	);
};

export default Skill;
