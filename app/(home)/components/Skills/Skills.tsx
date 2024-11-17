import Button from '@/app/components/Button/Button';
import SectionTitle from '@/app/components/Header/SectionTitle';
import MiniTool from '@/app/components/Tool/MiniTool';
import Tool from '@/app/components/Tool/Tool';
import { MINI_SKILLS, SKILLS } from '@/app/constants/skills';

const Skills = () => {
	return (
		<div>
			<SectionTitle text='Le mie competenze principali' />
			<div className='flex justify-center gap-4 sm:gap-6 lg:gap-12 mt-16 mb-6 flex-wrap'>
				{SKILLS.map(({ label, icon }, index) => (
					<Tool label={label} icon={icon} key={index} />
				))}
			</div>
			<div className='flex justify-center gap-4 sm:gap-6 lg:gap-12 mb-10 flex-wrap'>
				{MINI_SKILLS.map(({ label, icon }, index) => (
					<MiniTool label={label} icon={icon} key={index} />
				))}
			</div>
			<div>
				<p className='text-center text-xl text-neutral-950'>Ti mostro nel pratico cosa so fare</p>
				<Button type='secondary' label='Il mio portfolio' icon='portfolio2.svg' alt='Link al mio portfolio' onClick='/portfolio' className='m-auto mt-2' />
			</div>
		</div>
	);
};

export default Skills;
