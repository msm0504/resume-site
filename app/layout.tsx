import { Arvo, Lato } from 'next/font/google';
import { Box, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ParentCompProps } from '@/types';
import theme from '@/styles/theme';
import Footer from '@/components/shared/footer';
import TopNavbar from '@/components/shared/top-navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

config.autoAddCss = false;

const fontBody = Lato({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-body',
});

const fontHeading = Arvo({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
});

const RootLayout: React.FC<ParentCompProps> = ({ children }) => (
	<html lang='en'>
		<body className={`${fontBody.variable} ${fontHeading.variable}`}>
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					<TopNavbar />
					<Box display='flex' flexDirection='column' minHeight='100vh'>
						<Box flexGrow={1}>{children}</Box>
						<Footer />
					</Box>
				</ThemeProvider>
			</AppRouterCacheProvider>
		</body>
	</html>
);

export default RootLayout;
