import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '@/styles/custom-theme.scss';
import '@/styles/globals.css';
import TopNavbar from '@/client/components/top-navbar';
import Footer from '@/client/components/footer';

config.autoAddCss = false;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<TopNavbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
};

export default MyApp;
