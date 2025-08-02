'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
	AppBar,
	Box,
	Container,
	IconButton,
	Link as MuiLink,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { GITHUB_PROFILE, LINKEDIN_PROFILE, RESUME_URL } from '@/constants';

type PageLink = {
	label: string;
	route: string;
	scrollTop: boolean;
};

const pages: PageLink[] = [
	{ label: 'Experience', route: '/#prof-experience', scrollTop: false },
	{ label: 'Education', route: '/#education', scrollTop: false },
	{ label: 'Projects', route: '/projects', scrollTop: true },
	{ label: 'About', route: '/about', scrollTop: true },
	{ label: 'Contact', route: '/#contact', scrollTop: false },
];

const TopNavbar: React.FC = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar color='dark' position='sticky' elevation={0}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Stack direction='row' flexGrow={1} spacing={4}>
						<MuiLink underline='none' component={Link} href='/'>
							<Typography component='h1' fontSize='1.25rem'>
								Mark Monday
							</Typography>
						</MuiLink>
						<IconButton
							sx={{ padding: 0 }}
							aria-label='Link to my LinkedIn profile'
							href={LINKEDIN_PROFILE}
							color='primary'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</IconButton>
						<IconButton
							sx={{ padding: 0 }}
							aria-label='Link to my GitHub profile'
							href={GITHUB_PROFILE}
							color='primary'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faGithub} />
						</IconButton>
					</Stack>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							color='primary'
							aria-label='open main menu'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
						>
							<FontAwesomeIcon icon={faBars} />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={!!anchorElNav}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							{pages.map(page => (
								<MenuItem key={page.label} component={Link} href={page.route}>
									<Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
								</MenuItem>
							))}
							<MenuItem href={RESUME_URL} target='_blank' rel='noreferrer'>
								<Typography sx={{ textAlign: 'center' }}>Resume (.pdf)</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Stack direction='row' spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<MuiLink
								key={page.label}
								underline='none'
								sx={{ my: 2, display: 'block' }}
								component={Link}
								href={page.route}
							>
								{page.label}
							</MuiLink>
						))}
						<MuiLink
							underline='none'
							sx={{ my: 2, display: 'block' }}
							href={RESUME_URL}
							target='_blank'
							rel='noreferrer'
						>
							Resume (.pdf)
						</MuiLink>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default TopNavbar;
