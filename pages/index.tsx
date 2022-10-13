import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { nanoid } from 'nanoid';

import ContactSection from '@/client/sections/contact';
import IntroSection from '@/client/sections/intro';
import EducationSection from '@/client/sections/education';
import ExperienceSection from '@/client/sections/experience';
import { EDUCATION, EMPLOYMENT_HISTORY, INTERNSHIPS } from '@/data/resume-data';
import { Education, Employment, WithId } from '@/types/index';

type HomeProps = {
	education: Education[];
	employHistory: WithId<Employment>[];
	internships: WithId<Employment>[];
};

const generateItemIds = <T,>(items: T[]): WithId<T>[] =>
	items.map(item => ({ id: nanoid(10), ...item }));

const Home: NextPage<HomeProps> = ({ education, employHistory, internships }) => {
	return (
		<div>
			<Head>
				<title>Mark Monday Portfolio</title>
				<meta
					name='description'
					content="Hi, my name is Mark Monday. I create technical solutions. I'm a software engineer specializing in React and Java Spring Boot. Currently, I'm looking for a new opportunity, while continuing to grow my skills."
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<IntroSection />
				<ExperienceSection employHistory={employHistory} />
				<EducationSection education={education} internships={internships} />
				<ContactSection />
			</main>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = () => ({
	props: {
		education: EDUCATION,
		employHistory: generateItemIds(EMPLOYMENT_HISTORY),
		internships: generateItemIds(INTERNSHIPS),
	},
});
