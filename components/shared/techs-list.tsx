import { Box, Stack } from '@mui/material';

type TechsListProps = {
	technologies: string[];
	align?: 'left' | 'right';
};

const TechsList: React.FC<TechsListProps> = ({ technologies, align = 'left' }) => (
	<Stack
		component='ul'
		sx={{ listStyle: 'none' }}
		direction='row'
		flexWrap='wrap'
		justifyContent={align === 'right' ? 'end' : 'start'}
		margin={0}
		padding={0}
	>
		{technologies.map(techUsed => (
			<Box component='li' paddingX={2} key={techUsed}>
				{techUsed}
			</Box>
		))}
	</Stack>
);

export default TechsList;
