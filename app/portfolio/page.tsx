import { Metadata } from 'next';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

export const metadata: Metadata = {
	metadataBase: new URL('https://giuliopaesani.it'),
	title: 'Portfolio | Giulio Paesani',
	description: 'Alcuni dei mie progetti personali',
	keywords: 'Giulio Paesani portfolio, Giulio Paesani progetti',
	icons: '/icon.ico',
	openGraph: {
		title: 'Portfolio | Giulio Paesani',
		description: 'Alcuni dei mie progetti personali',
		images: '/portfolioPreview.webp',
		url: '/portfolio',
		locale: 'it',
		siteName: 'Giulio Paesani'
	}
};

const Portfolio = () => {
	return (
		<>
			<Header />
			<Projects />
		</>
	);
};

export default Portfolio;
