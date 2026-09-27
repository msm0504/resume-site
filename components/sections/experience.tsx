import EmployHistory from '../employ-history';
import { Employment, WithId } from '@/types';

type ExperienceProps = {
	employHistory: WithId<Employment>[];
};

const ExperienceSection: React.FC<ExperienceProps> = ({ employHistory }) => (
	<div className='bg-teal-950'>
		<section className='mx-auto my-0 w-full max-w-7xl px-3 py-5' id='prof-experience'>
			<h2 className='mb-4 font-bold text-sand-300'>Professional Experience</h2>
			<EmployHistory history={employHistory} />
		</section>
	</div>
);

export default ExperienceSection;
