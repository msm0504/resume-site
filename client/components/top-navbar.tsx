import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { EMAIL_MAILTO, LINKIN_PROFILE, RESUME_URL } from '@/client/constants';

type NavbarLinkProps = {
	text: string;
	path: string;
	scrollTop?: boolean;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ text, path, scrollTop = false }) => (
	<Link href={path} scroll={scrollTop}>
		<a className='nav-link me-md-2'>{text}</a>
	</Link>
);

const TopNavbar: React.FC = () => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Link href='/'>
			<a className='ms-3 navbar-brand'>Mark Monday</a>
		</Link>
		<Nav className='me-auto'>
			<div className='d-flex justify-content-start'>
				<a className='nav-link me-2' href={LINKIN_PROFILE} target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faLinkedin} size='xl' />
					<span className='sr-only'>{'Link to my LinkedIn profile'}</span>
				</a>
				<Nav.Link href={EMAIL_MAILTO}>
					<FontAwesomeIcon icon={faEnvelope} size='xl' />
					<span className='sr-only'>{'Link to write me an email'}</span>
				</Nav.Link>
			</div>
		</Nav>
		<Navbar.Toggle aria-controls='top-navbar-nav' />
		<Navbar.Collapse id='top-navbar-nav' className='text-center'>
			<Nav className='ms-auto'>
				<NavbarLink text='Experience' path='/#prof-experience' />
				<NavbarLink text='Education' path='/#education' />
				<NavbarLink text='Projects' path='/projects' />
				<NavbarLink text='About' path='/about' />
				<NavbarLink text='Contact' path='/#contact' />
				<a className='nav-link' href={RESUME_URL} target='_blank' rel='noreferrer'>
					Resume (.pdf)
				</a>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default TopNavbar;
