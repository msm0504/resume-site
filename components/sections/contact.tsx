import { Box, Button, Stack, Typography } from '@mui/material';
import { EMAIL_MAILTO } from '@/constants';

const ContactSection: React.FC = () => (
	<Box bgcolor='bg1.main'>
		<Box
			component='section'
			id='contact'
			maxWidth={400}
			sx={{ marginX: 'auto', marginY: 0, paddingX: 3, paddingY: 12 }}
		>
			<Stack alignItems='center' textAlign='center'>
				<Typography component='h2' variant='h4' fontWeight='bold' color='info'>
					Contact me
				</Typography>
				<Typography fontSize='1.5rem'>{`I'm interested in hearing about new senior software engineering roles.`}</Typography>
				<Box marginTop={10}>
					<Button href={EMAIL_MAILTO} variant='contained' color='info' size='large'>
						Email me
					</Button>
				</Box>
			</Stack>
		</Box>
	</Box>
);

export default ContactSection;
