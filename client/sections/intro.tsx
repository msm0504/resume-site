import styles from '@/styles/intro.module.css';

const IntroSection: React.FC = () => (
	<section className={styles.intro} id='intro'>
		<p>
			Hi, my name is <span className='d-block text-info h2 display-3 lh-base'>Mark Monday.</span>
		</p>
		<h2 className='display-3 lh-base'>I create technical solutions.</h2>
		<p>{`I'm a software engineer specializing in React and Java Spring Boot.`}</p>
		<p>{`Currently, I'm looking for a new opportunity, while continuing to grow my skills.`}</p>
	</section>
);

export default IntroSection;
