import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Button } from './base-ui';
import { EMAIL_MAILTO, GITHUB_PROFILE, LINKEDIN_PROFILE } from '@/constants';

const Footer: React.FC = () => (
	<footer className='py-12 text-center'>
		<h2>Mark Monday &middot; Software Engineer</h2>
		<ul className='mx-0 my-8 flex list-none flex-wrap justify-center gap-12 p-0'>
			<li>
				<Button
					className='p-0'
					aria-label='Link to my LinkedIn profile'
					href={LINKEDIN_PROFILE}
					color='gray'
					variant='text'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faLinkedin} size='2x' />
				</Button>
			</li>
			<li>
				<Button
					className='p-0'
					aria-label='Link to my GitHub profile'
					href={GITHUB_PROFILE}
					color='gray'
					variant='text'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faGithub} size='2x' />
				</Button>
			</li>
			<li>
				<Button
					className='p-0'
					aria-label='Link to write me an email'
					href={EMAIL_MAILTO}
					color='gray'
					variant='text'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faEnvelope} size='2x' />
				</Button>
			</li>
		</ul>
		<p className='text-sm'>&copy; {new Date().getFullYear()} Mark Monday. All rights reserved.</p>
	</footer>
);

export default Footer;
