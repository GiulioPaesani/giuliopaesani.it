import Button from '../global/Button';
import Skill from './Skill';

const skills = [
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

const Skills = () => {
	return (
		<div>
			<h3 className='text-center text-3xl font-medium text-neutral-950'>Competenze principali</h3>
			<div className='flex justify-around mt-16 mb-10 flex-wrap'>
				{skills.map(({ label, icon }, index) => (
					<Skill label={label} icon={icon} key={index} />
				))}
			</div>
			<div>
				<p className='text-center text-xl text-neutral-950'>Altre competenze secondarie su</p>
				<Button
					type='secondary'
					label='Linkedin'
					icon='external-link.svg'
					alt='Link al profilo Linkedin'
					onClick='https://www.linkedin.com/in/giulio-paesani/'
					className='m-auto mt-2'
				/>
			</div>
		</div>
	);
};

export default Skills;
