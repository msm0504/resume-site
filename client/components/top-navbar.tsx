import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitbucket, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { BITBUCKET_PROFILE, LINKIN_PROFILE, RESUME_URL } from '@/client/constants';

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
	<Navbar className='px-4' bg='dark' variant='dark' expand='md'>
		<Link href='/'>
			<a className='navbar-brand'>
				<h1 className='m-0 fs-5'>Mark Monday</h1>
			</a>
		</Link>
		<Nav className='me-auto'>
			<div className='d-flex justify-content-start'>
				<a className='nav-link me-2' href={LINKIN_PROFILE} target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faLinkedin} size='xl' />
					<span className='sr-only'>{'Link to my LinkedIn profile'}</span>
				</a>
				<a className='nav-link me-2' href={BITBUCKET_PROFILE} target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faBitbucket} size='xl' />
					<span className='sr-only'>{'Link to my Bitbucket profile'}</span>
				</a>
			</div>
		</Nav>
		<Navbar.Toggle aria-controls='top-navbar-nav' />
		<Navbar.Collapse id='top-navbar-nav' className='text-end'>
			<Nav className='ms-auto'>
				<NavbarLink text='Experience' path='/#prof-experience' />
				<NavbarLink text='Education' path='/#education' />
				<NavbarLink text='Projects' path='/projects' scrollTop />
				<NavbarLink text='About' path='/about' scrollTop />
				<NavbarLink text='Contact' path='/#contact' />
				<a className='nav-link' href={RESUME_URL} target='_blank' rel='noreferrer'>
					Resume (.pdf)
				</a>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default TopNavbar;
