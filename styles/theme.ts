'use client';
import { createTheme } from '@mui/material/styles';

const offWhite = '#f7f8fa';
const offBlack = '#0d0d0d';

const theme = createTheme({
	cssVariables: true,
	spacing: (factor: number) => `${0.25 * factor}rem`,
	palette: {
		primary: { main: '#7e8082' },
		info: { main: '#bfbda3' },
		light: { main: offWhite, contrastText: offBlack },
		dark: { main: offBlack, contrastText: offWhite },
		bg1: { main: '#003b41', contrastText: offWhite },
		bg2: { main: '#401212', contrastText: offWhite },
		common: {
			white: offWhite,
			black: offBlack,
		},
		text: {
			primary: offWhite,
		},
		background: {
			default: offBlack,
			paper: offBlack,
		},
	},
	typography: {
		fontFamily: 'var(--font-body)',
		fontSize: 16,
		h1: {
			fontFamily: 'var(--font-heading)',
		},
		h2: { fontFamily: 'var(--font-heading)' },
		h3: { fontFamily: 'var(--font-heading)' },
		h4: { fontFamily: 'var(--font-heading)' },
		h5: { fontFamily: 'var(--font-heading)' },
		h6: { fontFamily: 'var(--font-heading)' },
	},
	components: {
		MuiAccordion: {
			styleOverrides: {
				root: {
					backgroundColor: 'inherit',
				},
			},
			defaultProps: {
				elevation: 0,
				disableGutters: true,
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				expandIconWrapper: ({ theme }) => ({
					color: theme.palette.light.main,
				}),
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					borderRadius: 0,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: theme.spacing(3),
					padding: theme.spacing(3),
					textTransform: 'none',
				}),
			},
		},
		MuiIconButton: {
			styleOverrides: {
				colorPrimary: ({ theme }) => ({
					'&:focus, &:hover': {
						color: theme.palette.primary.light,
					},
				}),
			},
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiLink: {
			styleOverrides: {
				root: ({ theme }) => ({
					'&:focus, &:hover': {
						color: theme.palette.primary.light,
					},
				}),
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: theme.spacing(1),
					padding: theme.spacing(2),
				}),
			},
		},
		MuiTab: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.main,
					textTransform: 'none',
					'&.Mui-selected': {
						color: theme.palette.light.main,
					},
				}),
			},
		},
		MuiTabs: {
			defaultProps: {
				TabIndicatorProps: {
					sx: theme => ({ background: theme.palette.light.main }),
				},
			},
		},
	},
});

export default theme;
