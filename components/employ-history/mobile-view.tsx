'use client';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { EmployHistoryViewProps } from './';
import EmployHistoryDetails from './details';

type EmployHistoryMobileProps = EmployHistoryViewProps;

const EmployHistoryMobile: React.FC<EmployHistoryMobileProps> = ({
	history,
	selected,
	fnOnSelect,
	fnFormatLabel,
}) => (
	<div>
		{history.map(entry => (
			<Accordion
				key={entry.id}
				expanded={selected === entry.id}
				onChange={(_event, isExpanded) => fnOnSelect(isExpanded ? entry.id : '')}
			>
				<AccordionSummary
					expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
					aria-controls={`panel${entry.id}-content`}
					id={`panel${entry.id}-header`}
				>
					{fnFormatLabel(entry)}
				</AccordionSummary>
				<AccordionDetails>
					<EmployHistoryDetails employment={entry} />
				</AccordionDetails>
			</Accordion>
		))}
	</div>
);

export default EmployHistoryMobile;
