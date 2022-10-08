import Link from 'next/link';
import { Nav, Navbar } from 'react-bootstrap';

type NavbarLinkProps = {
	text: string;
	path: string;
	scrollTop?: boolean;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ text, path, scrollTop = false }) => (
	<Link href={path} scroll={scrollTop}>
		<a className='me-md-4 nav-link'>{text}</a>
	</Link>
);

const TopNavbar: React.FC = () => (
	<Navbar bg='dark' variant='dark' expand='md' sticky='top'>
		<Link href='/'>
			<a className='ms-3 navbar-brand'>Mark Monday</a>
		</Link>
		<Navbar.Toggle aria-controls='top-navbar-nav' />
		<Navbar.Collapse id='top-navbar-nav' className='text-center'>
			<Nav className='ms-auto'>
				<NavbarLink text='Professional Experience' path='/#prof-experience' />
				<NavbarLink text='Education' path='/#education' />
				<NavbarLink text='Personal Projects' path='/projects' />
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default TopNavbar;
