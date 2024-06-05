import Button from '@/app/components/Button/Button';
import SectionTitle from '@/app/components/Header/SectionTitle';
import MiniTool from '@/app/components/Tool/MiniTool';
import Tool from '@/app/components/Tool/Tool';
import { PortfolioProjectTool } from '@/app/portfolio/components/Projects/Project';

type ToolsProps = {
	primaryTools: PortfolioProjectTool[];
	secondaryTools: PortfolioProjectTool[];
};

const Tools = ({ primaryTools, secondaryTools }: ToolsProps) => {
	return (
		<div>
			<SectionTitle text='Gli strumenti che ho utilizzato' />
			<div className='flex justify-center gap-4 sm:gap-6 lg:gap-12 mt-16 mb-6 flex-wrap'>
				{primaryTools.map(({ label, icon }, index) => (
					<Tool label={label} icon={icon} key={index} />
				))}
			</div>
			<div className='flex justify-center gap-4 sm:gap-6 lg:gap-12 mb-10 flex-wrap'>
				{secondaryTools.map(({ label, icon }, index) => (
					<MiniTool label={label} icon={icon} key={index} />
				))}
			</div>
		</div>
	);
};

export default Tools;
