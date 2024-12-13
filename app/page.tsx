import type { Metadata } from 'next';
import { nanoid } from 'nanoid';
import ContactSection from '@/components/sections/contact';
import IntroSection from '@/components/sections/intro';
import EducationSection from '@/components/sections/education';
import ExperienceSection from '@/components/sections/experience';
import { EDUCATION, EMPLOYMENT_HISTORY, INTERNSHIPS } from '@/data/resume-data';
import { WithId } from '@/types';

export const metadata: Metadata = {
	title: 'Mark Monday Portfolio',
	description:
		"Hi, my name is Mark Monday. I create technical solutions. I'm a software engineer specializing in React and Java Spring Boot. Currently, I'm a senior UI developer for Travelport.",
};

const generateItemIds = <T,>(items: T[]): WithId<T>[] =>
	items.map(item => ({ id: nanoid(10), ...item }));

const employHistory = generateItemIds(EMPLOYMENT_HISTORY);
const internships = generateItemIds(INTERNSHIPS);

const Home: React.FC = () => (
	<main>
		<IntroSection />
		<ExperienceSection employHistory={employHistory} />
		<EducationSection education={EDUCATION} internships={internships} />
		<ContactSection />
	</main>
);

export default Home;
