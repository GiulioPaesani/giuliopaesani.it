import Image from 'next/image';

type MiniToolProps = {
	label: string;
	icon: string;
};

const MiniTool = ({ label, icon }: MiniToolProps) => {
	return (
		<div className='group mb-4 ease-in-out duration-200 hover:-translate-y-3 w-60 md:w-72 h-24 bg-primary-500 rounded-lg flex justify-start items-center gap-4 py-4 px-8'>
			<Image src={`/${icon}`} alt={''} width={64} height={64} className={`ease-in-out duration-200 group-hover:-rotate-6 group-hover:-translate-y-1 rounded-lg`} />
			<p className='text-center ease-in-out duration-200 group-hover:rotate-3 group-hover:-translate-y-1 text-2xl text-neutral-50'>{label}</p>
		</div>
	);
};

export default MiniTool;
