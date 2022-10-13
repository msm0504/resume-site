import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Notes from '../notes';
import TechsList from '../techs-list';
import { Employment, Role, TitleDuration } from '@/types/index';
import style from '@/styles/employ-details.module.css';

type EmployHistoryDetailsProps = {
	employment: Employment;
	bgColor: string;
};

const HEADING_CLASSES = 'h6 fw-semibold';

const formatDuration = (title: string, start: string, end: string, isHeading = false) => {
	return (
		<div className='d-flex flex-wrap justify-content-between text-light'>
			{isHeading ? (
				<h4 className={HEADING_CLASSES}>{title}</h4>
			) : (
				<div className={HEADING_CLASSES}>{title}</div>
			)}

			<div>
				{start} - {end}
			</div>
		</div>
	);
};

const formatTitles = (titles: string | TitleDuration[]) =>
	Array.isArray(titles) ? (
		<>
			{titles.map(title => (
				<React.Fragment key={title.title}>
					{formatDuration(title.title, title.start, title.end)}
				</React.Fragment>
			))}
		</>
	) : (
		<div className={HEADING_CLASSES}>{titles}</div>
	);

const formatRole = (role: Role) => (
	<div>
		<div className={`${HEADING_CLASSES} text-info`}>Responsiblities</div>
		<Notes notes={role.highlights} />
		{role.techsUsed && (
			<>
				<div className={`${HEADING_CLASSES} text-info`}>Technologies Used</div>
				<TechsList technologies={role.techsUsed} />
			</>
		)}
	</div>
);

const formatRoles = (roles: Role[], bgColor: string) =>
	!roles.length ? null : roles.length === 1 ? (
		<>{formatRole(roles[0])}</>
	) : (
		<Accordion flush>
			{roles.map(role => (
				<Accordion.Item key={role.name} eventKey={role.name ?? ''}>
					<Accordion.Button className={`${style.roleListItem} bg-${bgColor} d-block px-1`}>
						{formatDuration(role.name ?? '', role.start ?? '', role.end ?? '', true)}
					</Accordion.Button>
					<Accordion.Body className={`bg-${bgColor}`}>{formatRole(role)}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);

const EmployHistoryDetails: React.FC<EmployHistoryDetailsProps> = ({ employment, bgColor }) => (
	<article style={{ minHeight: '400px' }} className={`p-3 bg-${bgColor}`}>
		<div className='mb-4'>{formatTitles(employment.titles)}</div>
		{formatRoles(employment.roles, bgColor)}
	</article>
);

export default EmployHistoryDetails;
