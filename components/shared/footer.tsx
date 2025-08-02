import { Box, IconButton, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { EMAIL_MAILTO, GITHUB_PROFILE, LINKEDIN_PROFILE } from '@/constants';
import styles from '@/styles/footer.module.css';

const Footer: React.FC = () => (
	<Box component='footer' textAlign='center' paddingY={12}>
		<Typography component='h2' variant='h4'>
			Mark Monday &middot; Software Engineer
		</Typography>
		<ul className={styles.footerButtons}>
			<li>
				<IconButton
					sx={{ padding: 0 }}
					aria-label='Link to my LinkedIn profile'
					href={LINKEDIN_PROFILE}
					color='primary'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faLinkedin} size='2x' />
				</IconButton>
			</li>
			<li>
				<IconButton
					sx={{ padding: 0 }}
					aria-label='Link to my GitHub profile'
					href={GITHUB_PROFILE}
					color='primary'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faGithub} size='2x' />
				</IconButton>
			</li>
			<li>
				<IconButton
					sx={{ padding: 0 }}
					aria-label='Link to write me an email'
					href={EMAIL_MAILTO}
					color='primary'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faEnvelope} size='2x' />
				</IconButton>
			</li>
		</ul>
		<Typography variant='subtitle2'>
			&copy; {new Date().getFullYear()} Mark Monday. All rights reserved.
		</Typography>
	</Box>
);

export default Footer;
