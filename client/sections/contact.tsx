import Button from 'react-bootstrap/Button';

import { EMAIL_MAILTO } from '@/client/constants';

const ContactSection: React.FC = () => (
	<div className='bg-secondary'>
		<section
			id='contact'
			style={{ width: '400px' }}
			className='text-center mx-auto my-0 px-0 py-5 fs-4'
		>
			<h2 className='text-info fw-bold'>Contact me</h2>
			<p>{`I'm interested in hearing about new senior software engineering roles.`}</p>
			<p className='mt-5'>
				<Button href={EMAIL_MAILTO} variant='info' size='lg'>
					Email me
				</Button>
			</p>
		</section>
	</div>
);

export default ContactSection;
