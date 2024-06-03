import Image from 'next/image';

type ToolProps = {
	label: string;
	icon: string;
};

const Tool = ({ label, icon }: ToolProps) => {
	return (
		<div className='relative mb-4 group ease-in-out duration-200 hover:-translate-y-3 w-64 h-36'>
			<div className='w-full rounded-lg absolute bottom-0 bg-primary-500 h-[104px]'></div>
			<div className='w-full h-full absolute bottom-0 '>
				<Image
					src={`./${icon}`}
					alt={''}
					width={80}
					height={80}
					className={`m-auto ease-in-out duration-200 group-hover:-rotate-6 group-hover:-translate-y-1 rounded-lg`}
				/>
				<p className='text-center my-4 ease-in-out duration-200 group-hover:rotate-3 group-hover:-translate-y-1 text-3xl text-neutral-50'>{label}</p>
			</div>
		</div>
	);
};

export default Tool;
