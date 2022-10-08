import Card from 'react-bootstrap/Card';

import EmployHistory from '../components/employ-history';
import Notes from '../components/notes';
import { Education, Employment } from '@/types/index';
import React from 'react';

type EducationProps = {
	education: Education[];
	internships: Employment[];
};

const EducationSection: React.FC<EducationProps> = ({ education, internships }) => (
	<div className='bg-danger'>
		<section id='education' style={{ maxWidth: '1200px' }} className='mx-auto my-0 px-3 py-5'>
			<h2 className='text-info fw-bold mb-3'>Education</h2>
			{education.map(school => (
				<React.Fragment key={school.schoolName}>
					<div className='d-flex justify-content-between text-light'>
						<div className='d-block'>
							<Card.Title>{school.schoolName}</Card.Title>
							<Card.Subtitle>
								{school.city}, {school.state}
							</Card.Subtitle>
						</div>
						<div>Graduated {school.gradDate}</div>
					</div>
					<div style={{ maxWidth: '800px' }} className='mx-auto'>
						<Notes notes={school.highlights} />
					</div>
				</React.Fragment>
			))}
			<h3 className='h5 text-light'>Internships</h3>
			<EmployHistory history={internships} bgColor='danger' />
		</section>
	</div>
);

export default EducationSection;
