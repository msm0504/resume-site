import { Box, Container, Typography } from '@mui/material';
import EmployHistory from '../employ-history';
import { Employment, WithId } from '@/types';

type ExperienceProps = {
	employHistory: WithId<Employment>[];
};

const ExperienceSection: React.FC<ExperienceProps> = ({ employHistory }) => (
	<Box bgcolor='bg1.main'>
		<Container
			component='section'
			id='prof-experience'
			maxWidth='lg'
			sx={{ marginY: 0, paddingX: 3, paddingY: 5 }}
		>
			<Typography component='h2' variant='h4' fontWeight='bold' color='info' marginBottom={4}>
				Professional Experience
			</Typography>
			<EmployHistory history={employHistory} />
		</Container>
	</Box>
);

export default ExperienceSection;
