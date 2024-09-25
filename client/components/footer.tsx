import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitbucket, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { BITBUCKET_PROFILE, EMAIL_MAILTO, LINKIN_PROFILE } from '@/client/constants';
import styles from '@/styles/footer.module.css';

const Footer: React.FC = () => (
	<footer className='text-center px-0 py-5'>
		<h2>Mark Monday &middot; Software Engineer</h2>
		<ul className={styles.footerButtons}>
			<li>
				<a href={LINKIN_PROFILE} target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faLinkedin} size='3x' />
					<span className='sr-only'>{'Link to my LinkedIn profile'}</span>
				</a>
			</li>
			<li>
				<a href={BITBUCKET_PROFILE} target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faBitbucket} size='3x' />
					<span className='sr-only'>{'Link to my Bitbucket profile'}</span>
				</a>
			</li>
			<li>
				<a href={EMAIL_MAILTO}>
					<FontAwesomeIcon icon={faEnvelope} size='3x' />
					<span className='sr-only'>{'Link to write me an email'}</span>
				</a>
			</li>
		</ul>
		<p>
			<small>&copy; {new Date().getFullYear()} Mark Monday. All rights reserved.</small>
		</p>
	</footer>
);

export default Footer;
