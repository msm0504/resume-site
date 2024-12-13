import type { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import { ABOUT_ME } from '@/data/about-me';
import DescriptWithImg from '@/components/shared/descript-with-img';

export const metadata: Metadata = {
	title: 'About Me - Mark Monday Portfolio',
	description:
		"I'm a full-stack software engineer based in New Jersey. I have 10+ years of experience writing JavaScript and Java, most recently using React and Spring Boot. As a senior engineer, I've also analyzed product requirements, written technical designs, and conducted code reviews. To keep my coding skills sharp, I take training courses on Frontend Masters and work on my own projects.",
};

const About: React.FC = () => (
	<main>
		<Box bgcolor='bg2.main'>
			<Container
				component='section'
				id='about-me'
				maxWidth='lg'
				sx={{ marginY: 0, paddingX: 3, paddingY: 5 }}
			>
				<Typography component='h2' variant='h4' fontWeight='bold' color='info' marginBottom={4}>
					About Me
				</Typography>
				<DescriptWithImg item={ABOUT_ME} imageLeft />
			</Container>
		</Box>
	</main>
);

export default About;
