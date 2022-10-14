import Accordion from 'react-bootstrap/Accordion';

import { EmployHistoryViewProps } from './';
import EmployHistoryDetails from './details';
import style from '@/styles/employ-mobile.module.css';

type EmployHistoryMobileProps = EmployHistoryViewProps;

const EmployHistoryMobile: React.FC<EmployHistoryMobileProps> = ({
	history,
	bgColor,
	selected,
	fnOnSelect,
	fnFormatLabel,
}) => (
	<Accordion
		flush
		activeKey={selected}
		onSelect={eventKey => fnOnSelect(eventKey ? String(eventKey) : '')}
	>
		{history.map(entry => (
			<Accordion.Item key={entry.id} eventKey={entry.id}>
				<Accordion.Button className={`${style.employListItem} bg-${bgColor} text-light`}>
					{fnFormatLabel(entry)}
				</Accordion.Button>
				<Accordion.Body className='p-0'>
					<EmployHistoryDetails employment={entry} bgColor={bgColor} />
				</Accordion.Body>
			</Accordion.Item>
		))}
	</Accordion>
);

export default EmployHistoryMobile;
