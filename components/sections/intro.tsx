import { Typography } from '@mui/material';
import styles from '@/styles/intro.module.css';

const IntroSection: React.FC = () => (
	<section className={styles.intro} id='intro'>
		<Typography component='p'>
			Hi, my name is{' '}
			<Typography component='span' variant='h2' display='block' color='info'>
				Mark Monday.
			</Typography>
		</Typography>
		<Typography component='h2' variant='h2'>
			I create technical solutions.
		</Typography>
		<Typography component='p'>{`I'm a software engineer specializing in React and Java Spring Boot.`}</Typography>
		<Typography component='p'>{`Currently, I'm a senior UI developer for Travelport.`}</Typography>
	</section>
);

export default IntroSection;
