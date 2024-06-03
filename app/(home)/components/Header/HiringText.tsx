import styles from './styles.module.css';

const HiringText = () => {
	return (
		<div className='flex items-center mb-4'>
			<div className={`size-4 bg-[#45AF56] rounded-full m-3 ${styles.hiringAnimation}`}></div>
			<p className='text-lg sm:text-2xl text-neutral-700 uppercase'>Disponibile per un&apos;assunzione</p>
		</div>
	);
};

export default HiringText;
