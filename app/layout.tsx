import { Arvo, Lato } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ParentCompProps } from '@/types';
import Footer from '@/components/shared/footer';
import TopNavbar from '@/components/shared/top-navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

config.autoAddCss = false;

const fontBody = Lato({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lato',
});

const fontHeading = Arvo({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-arvo',
});

const RootLayout: React.FC<ParentCompProps> = ({ children }) => (
	<html lang='en' className={`${fontBody.variable} ${fontHeading.variable} dark`}>
		<body className='bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-gray-100'>
			<TopNavbar />
			<div className='flex min-h-screen flex-col'>
				<div className='grow'>{children}</div>
				<Footer />
			</div>
		</body>
	</html>
);

export default RootLayout;
