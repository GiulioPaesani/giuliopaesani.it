import Button from '../Button';
import Skill from './Skill';

const skills = [
	{
		label: 'JavaScript',
		icon: 'javascript.png'
	},
	{
		label: 'TypeScript',
		icon: 'typescript.png'
	},
	{
		label: 'CSS',
		icon: 'css.png'
	},
	{
		label: 'React - Next.js',
		icon: 'react.png'
	}
];

const Skills = () => {
	return (
		<div>
			<h3 className='text-center text-4xl font-medium text-neutral-950'>Competenze principali</h3>
			<div className='flex justify-around mt-16 mb-10 flex-wrap'>
				{skills.map(({ label, icon }) => (
					<Skill label={label} icon={icon} />
				))}
			</div>
			<div>
				<p className='text-center text-xl text-neutral-950'>Altre competenze secondarie su</p>
				<Button
					type='secondary'
					label='Linkedin'
					icon='external-link.svg'
					onClick='https://www.linkedin.com/in/giulio-paesani-463b291ba/'
					className='m-auto mt-2'
				/>
			</div>
		</div>
	);
};

export default Skills;
