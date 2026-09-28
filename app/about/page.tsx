import type { Metadata } from 'next';
import { ABOUT_ME } from '@/data/about-me';
import DescriptWithImg from '@/components/shared/descript-with-img';

export const metadata: Metadata = {
	title: 'About Me - Mark Monday Portfolio',
	description:
		"I'm a full-stack software engineer based in New Jersey. I have 10+ years of experience writing JavaScript and Java, most recently using React and Spring Boot. As a senior engineer, I've also analyzed product requirements, written technical designs, and conducted code reviews. To keep my coding skills sharp, I take training courses on Frontend Masters and work on my own projects.",
};

const About: React.FC = () => (
	<main>
		<div className='bg-ruby-200 dark:bg-ruby-950'>
			<section className='mx-auto my-0 w-full max-w-7xl px-3 py-5' id='about-me'>
				<h2 className='mb-4 font-bold text-sand-700 dark:text-sand-300'>About Me</h2>
				<DescriptWithImg item={ABOUT_ME} imageLeft />
			</section>
		</div>
	</main>
);

export default About;
