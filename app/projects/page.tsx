import type { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import { PERSONAL_PROJECTS } from '@/data/projects';
import DescriptWithImg from '@/components/shared/descript-with-img';

export const metadata: Metadata = {
	title: 'Projects - Mark Monday Portfolio',
	description:
		"Hi, my name is Mark Monday. I'm a software engineer specializing in React and Java Spring Boot. My current personal project is a Media Bubbles, a news aggregator to show recent headlines either filtered according to political bias or from sources with various political leanings.",
};

const Projects: React.FC = () => (
	<main>
		<Box bgcolor='bg1.main'>
			<Container
				component='section'
				id='projects'
				maxWidth='lg'
				sx={{ marginY: 0, paddingX: 3, paddingY: 5 }}
			>
				<Typography component='h2' variant='h4' fontWeight='bold' color='info' marginBottom={4}>
					Personal Projects
				</Typography>
				{PERSONAL_PROJECTS.map(project => (
					<article key={project.name}>
						<Typography component='h3' variant='h6'>
							{project.name}
						</Typography>
						{project.highlights.map((descript, descriptIndex) => (
							<Box paddingY={2} key={descript.description.substring(0, 10)}>
								<DescriptWithImg item={descript} imageLeft={descriptIndex % 2 === 0} />
							</Box>
						))}
					</article>
				))}
			</Container>
		</Box>
	</main>
);

export default Projects;
