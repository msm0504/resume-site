import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import DescriptWithImg from '@/client/components/descript-with-img';
import { PERSONAL_PROJECTS } from '@/data/projects';
import { Project } from '@/types/index';

type ProjectsProps = {
	projects: Project[];
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
	return (
		<div>
			<Head>
				<title>Projects - Mark Monday Portfolio</title>
				<meta
					name='description'
					content="Hi, my name is Mark Monday. I'm a software engineer specializing in React and Java Spring Boot. My current personal project is a Media Bubbles, a news aggregator to show recent headlines either filtered according to political bias or from sources with various political leanings."
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='bg-secondary'>
					<section id='projects' style={{ maxWidth: '1200px' }} className='mx-auto my-0 px-3 py-5'>
						<h2 className='text-info fw-bold mb-3'>Personal Projects</h2>
						{projects.map(project => (
							<article key={project.name}>
								<h3>{project.name}</h3>
								{project.highlights.map((descript, descriptIndex) => (
									<div className='py-2' key={descript.description.substring(0, 10)}>
										<DescriptWithImg item={descript} imageLeft={descriptIndex % 2 === 0} />
									</div>
								))}
							</article>
						))}
					</section>
				</div>
			</main>
		</div>
	);
};

export default Projects;

export const getStaticProps: GetStaticProps = () => ({
	props: {
		projects: PERSONAL_PROJECTS,
	},
});
