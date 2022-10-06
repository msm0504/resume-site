import EmployHistory from '../components/employ-history';
import { Employment } from '../../types';

type ExperienceProps = {
	employHistory: Employment[];
};

const ExperienceSection: React.FC<ExperienceProps> = ({ employHistory }) => (
	<div className='bg-secondary'>
		<section id='prof-experience' style={{ maxWidth: '1200px' }} className='mx-auto my-0 px-3 py-5'>
			<h2 className='text-primary mb-3'>Professional Experience</h2>
			<EmployHistory history={employHistory} bgColor='secondary' />
		</section>
	</div>
);

export default ExperienceSection;
