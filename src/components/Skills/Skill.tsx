type SkillProps = {
	label: string;
	icon: string;
	mini?: boolean;
};

const Skill = ({ label, icon, mini }: SkillProps) => {
	return (
		<div id='competenze' className={` relative mb-4 group ease-in-out duration-200 hover:-translate-y-3 ${!mini ? 'w-64 h-36' : 'w-52 h-32'}`}>
			<div className={`w-full absolute bottom-0 rounded-lg ${!mini ? 'bg-primary-500 h-[104px]' : 'border-primary-500 border-4 h-20'}`}></div>
			<div className='w-full h-full absolute bottom-0 '>
				<img
					src={`./${icon}`}
					alt={`Icona di ${icon}`}
					className={`m-auto ease-in-out duration-200 group-hover:-rotate-6 group-hover:-translate-y-1 rounded-lg ${!mini ? 'size-20' : 'size-16'}`}
				/>
				<p
					className={`  text-center my-4 ease-in-out duration-200 group-hover:rotate-3 group-hover:-translate-y-1 ${
						!mini ? 'text-3xl text-neutral-50' : 'text-2xl text-primary-500'
					}`}>
					{label}
				</p>
			</div>
		</div>
	);
};

export default Skill;
