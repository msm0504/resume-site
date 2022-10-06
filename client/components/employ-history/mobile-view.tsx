import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import EmployHistoryDetails from './details';
import { Employment, WithId } from '../../../types';

type EmployHistoryMobileProps = {
	history: WithId<Employment>[];
	fnFormatLabel: (entry: WithId<Employment>) => string | JSX.Element;
};

const EmployHistoryMobile: React.FC<EmployHistoryMobileProps> = ({ history, fnFormatLabel }) => {
	const [active, setActive] = useState<string>(history[0]?.id);

	return (
		<Accordion
			defaultActiveKey={history[0].id}
			onSelect={eventKey => setActive(String(eventKey))}
			flush
		>
			{history.map(entry => (
				<Accordion.Item key={entry.id} eventKey={entry.id}>
					<Accordion.Button
						className={`bg-${entry.id === active ? 'primary' : 'secondary'} text-white`}
					>
						{fnFormatLabel(entry)}
					</Accordion.Button>
					<Accordion.Body className='p-0'>
						<EmployHistoryDetails employment={entry} />
					</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
};

export default EmployHistoryMobile;
