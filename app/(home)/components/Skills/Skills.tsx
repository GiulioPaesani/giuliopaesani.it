import Button from '@/app/components/Button/Button';
import MiniTool from '@/app/components/Tool/MiniTool';
import Tool from '@/app/components/Tool/Tool';

const SKILLS = [
	{
		label: 'JavaScript',
		icon: 'javascript.svg'
	},
	{
		label: 'TypeScript',
		icon: 'typescript.svg'
	},
	{
		label: 'CSS',
		icon: 'css.svg'
	},
	{
		label: 'React',
		icon: 'react.svg'
	},
	{
		label: 'Angular',
		icon: 'angular.svg'
	}
];
const MINI_SKILLS = [
	{
		label: 'Node.js',
		icon: 'node.svg'
	},
	{
		label: 'Git',
		icon: 'git.svg'
	},
	{
		label: 'MongoDB',
		icon: 'mongodb.svg'
	},
	{
		label: 'Next.js',
		icon: 'next.svg'
	}
];

const Skills = () => {
	return (
		<>
			<div className='flex justify-around mt-16 mb-6 flex-wrap'>
				{SKILLS.map(({ label, icon }, index) => (
					<Tool label={label} icon={icon} key={index} />
				))}
			</div>
			<div className='flex justify-around mb-10 flex-wrap'>
				{MINI_SKILLS.map(({ label, icon }, index) => (
					<MiniTool label={label} icon={icon} key={index} />
				))}
			</div>
			<div>
				<p className='text-center text-xl text-neutral-950'>Ti mostro nel pratico cosa so fare</p>
				<Button type='secondary' label='Il mio portfolio' icon='external-link.svg' alt='Link al mio portfolio' onClick='/portfolio' className='m-auto mt-2' />
			</div>
		</>
	);
};

export default Skills;
