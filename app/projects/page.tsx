import type { Metadata } from 'next';
import { PERSONAL_PROJECTS } from '@/data/projects';
import DescriptWithImg from '@/components/shared/descript-with-img';

export const metadata: Metadata = {
	title: 'Projects - Mark Monday Portfolio',
	description:
		"Hi, my name is Mark Monday. I'm a software engineer specializing in React and Java Spring Boot. My current personal project is a Media Bubbles, a news aggregator to show recent headlines either filtered according to political bias or from sources with various political leanings.",
};

const Projects: React.FC = () => (
	<main>
		<div className='bg-teal-200 dark:bg-teal-950'>
			<section className='mx-auto my-0 w-full max-w-7xl px-3 py-5' id='projects'>
				<h2 className='mb-4 font-bold text-sand-700 dark:text-sand-300'>Personal Projects</h2>
				{PERSONAL_PROJECTS.map(project => (
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
);

export default Projects;
