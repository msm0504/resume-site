import Accordion from 'react-bootstrap/Accordion';

import EmployHistoryDetails from './details';
import { Employment, WithId } from '../../../types';

type EmployHistoryMobileProps = {
	history: WithId<Employment>[];
	bgColor: string;
	fnFormatLabel: (entry: WithId<Employment>) => string | JSX.Element;
};

const EmployHistoryMobile: React.FC<EmployHistoryMobileProps> = ({
	history,
	bgColor,
	fnFormatLabel,
}) => (
	<Accordion defaultActiveKey={history[0].id} flush>
		{history.map(entry => (
			<Accordion.Item key={entry.id} eventKey={entry.id}>
				<Accordion.Button className={`bg-${bgColor} text-light`}>
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
