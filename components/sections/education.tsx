import { Fragment } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import EmployHistory from '../employ-history';
import Notes from '../shared/notes';
import { Education, Employment, WithId } from '@/types';

type EducationProps = {
	education: Education[];
	internships: WithId<Employment>[];
};

const EducationSection: React.FC<EducationProps> = ({ education, internships }) => (
	<Box bgcolor='bg2.main'>
		<Container
			component='section'
			id='education'
			maxWidth='lg'
			sx={{ marginY: 0, paddingX: 3, paddingY: 5 }}
		>
			<Typography component='h2' variant='h4' fontWeight='bold' color='info' marginBottom={4}>
				Education
			</Typography>
			{education.map(school => (
				<Fragment key={school.schoolName}>
					<Stack direction='row'>
						<Box flexGrow={1}>
							<Typography variant='h5'>{school.schoolName}</Typography>
							<Typography variant='h6'>
								{school.city}, {school.state}
							</Typography>
						</Box>
						<Typography>Graduated {school.gradDate}</Typography>
					</Stack>
					<Container maxWidth='md'>
						<Notes notes={school.highlights} />
					</Container>
				</Fragment>
			))}
			<Typography component='h3' variant='h5' marginBottom={4}>
				Internships
			</Typography>
			<EmployHistory history={internships} />
		</Container>
	</Box>
);

export default EducationSection;
