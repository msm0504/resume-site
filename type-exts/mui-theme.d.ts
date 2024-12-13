import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		light: Palette['primary'];
		dark: Palette['primary'];
		bg1: Palette['primary'];
		bg2: Palette['primary'];
	}

	interface PaletteOptions {
		light?: PaletteOptions['primary'];
		dark?: PaletteOptions['primary'];
		bg1?: PaletteOptions['primary'];
		bg2?: PaletteOptions['primary'];
	}
}

declare module '@mui/material/AppBar' {
	interface AppBarPropsColorOverrides {
		dark: true;
	}
}
