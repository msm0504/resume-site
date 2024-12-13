import { Fragment } from 'react';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Box,
	Stack,
	Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Notes from '../shared/notes';
import TechsList from '../shared/techs-list';
import { Employment, Role, TitleDuration } from '@/types';

type EmployHistoryDetailsProps = {
	employment: Employment;
};

const formatDuration = (title: string, start: string, end: string, isHeading = false) => {
	return (
		<Stack direction='row' flexWrap='wrap' alignItems='center' width='100%' paddingRight={2}>
			<Typography flexGrow={1} component={isHeading ? 'h4' : 'span'}>
				{title}
			</Typography>
			<Typography>
				{start} - {end}
			</Typography>
		</Stack>
	);
};

const formatTitles = (titles: string | TitleDuration[]) =>
	Array.isArray(titles) ? (
		<>
			{titles.map(title => (
				<Fragment key={`${title.title}_${title.start}`}>
					{formatDuration(title.title, title.start, title.end)}
				</Fragment>
			))}
		</>
	) : (
		<Typography>{titles}</Typography>
	);

const formatRole = (role: Role) => (
	<div>
		<Typography variant='h6' fontWeight='semibold' color='info'>
			Responsiblities
		</Typography>
		<Notes notes={role.highlights} />
		{role.techsUsed && (
			<>
				<Typography variant='h6' fontWeight='semibold' color='info'>
					Technologies Used
				</Typography>
				<TechsList technologies={role.techsUsed} />
			</>
		)}
	</div>
);

const formatRoles = (roles: Role[]) =>
	!roles.length ? null : roles.length === 1 ? (
		<>{formatRole(roles[0])}</>
	) : (
		<div>
			{roles.map(role => (
				<Accordion key={role.name}>
					<AccordionSummary
						expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
						aria-controls={`panel-${role.name}-content`}
						id={`panel-${role.name}-header`}
					>
						{formatDuration(role.name ?? '', role.start ?? '', role.end ?? '', true)}
					</AccordionSummary>
					<AccordionDetails>{formatRole(role)}</AccordionDetails>
				</Accordion>
			))}
		</div>
	);

const EmployHistoryDetails: React.FC<EmployHistoryDetailsProps> = ({ employment }) => (
	<Box component='article' minHeight='400px' padding={3}>
		<Box marginBottom={4}>{formatTitles(employment.titles)}</Box>
		{formatRoles(employment.roles)}
	</Box>
);

export default EmployHistoryDetails;
