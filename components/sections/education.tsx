import { Fragment } from 'react';
import EmployHistory from '../employ-history';
import Notes from '../shared/notes';
import { Education, Employment, WithId } from '@/types';

type EducationProps = {
	education: Education[];
	internships: WithId<Employment>[];
};

const EducationSection: React.FC<EducationProps> = ({ education, internships }) => (
	<div className='bg-ruby-200 dark:bg-ruby-950'>
		<section className='mx-auto my-0 w-full max-w-7xl px-3 py-5' id='education'>
			<h2 className='mb-4 font-bold text-sand-700 dark:text-sand-300'>Education</h2>
			{education.map(school => (
				<Fragment key={school.schoolName}>
					<div className='flex'>
						<div className='grow'>
							<h5>{school.schoolName}</h5>
							<h6>
								{school.city}, {school.state}
							</h6>
						</div>
						<p>Graduated {school.gradDate}</p>
					</div>
					<div className='mx-auto w-full max-w-4xl'>
						<Notes notes={school.highlights} />
					</div>
				</Fragment>
			))}
			<h3 className='mb-4'>Internships</h3>
			<EmployHistory history={internships} />
		</section>
	</div>
);

export default EducationSection;
