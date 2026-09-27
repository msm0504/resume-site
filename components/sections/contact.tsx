import { Button } from '../shared/base-ui';
import { EMAIL_MAILTO } from '@/constants';

const ContactSection: React.FC = () => (
	<div className='bg-teal-950'>
		<section className='mx-auto my-0 max-w-[400] px-3 py-12' id='contact'>
			<div className='flex flex-col items-center text-center'>
				<h2 className='font-bold text-sand-300'>Contact me</h2>
				<p className='text-2xl'>{`I'm interested in hearing about new senior software engineering roles.`}</p>
				<div className='mt-10'>
					<Button
						className='text-xl font-semibold'
						href={EMAIL_MAILTO}
						variant='contained'
						color='sand'
					>
						Email me
					</Button>
				</div>
			</div>
		</section>
	</div>
);

export default ContactSection;
