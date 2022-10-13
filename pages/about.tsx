import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import DescriptWithImg from '@/client/components/descript-with-img';
import { ABOUT_ME } from '@/data/about-me';
import { DescriptionWithImage } from '@/types/index';

type AboutProps = {
	aboutMe: DescriptionWithImage;
};

const About: NextPage<AboutProps> = ({ aboutMe }) => {
	return (
		<div>
			<Head>
				<title>About Me - Mark Monday Portfolio</title>
				<meta
					name='description'
					content="I'm a full-stack software engineer based in New Jersey. I have 10+ years of experience writing JavaScript and Java, most recently using React and Spring Boot. As a senior engineer, I've also analyzed product requirements, written technical designs, and conducted code reviews. To keep my coding skills sharp, I take training courses on Frontend Masters and work on my own projects."
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='bg-danger'>
					<section id='about-me' style={{ maxWidth: '1200px' }} className='mx-auto my-0 px-3 py-5'>
						<h2 className='text-info fw-bold mb-3'>About Me</h2>
						<DescriptWithImg item={aboutMe} imageLeft />
					</section>
				</div>
			</main>
		</div>
	);
};

export default About;

export const getStaticProps: GetStaticProps = () => ({
	props: {
		aboutMe: ABOUT_ME,
	},
});
