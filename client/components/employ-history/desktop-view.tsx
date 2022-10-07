import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import EmployHistoryDetails from './details';
import { Employment, WithId } from '../../../types';

type EmployHistoryDesktopProps = {
	history: WithId<Employment>[];
	bgColor: string;
	fnFormatLabel: (entry: WithId<Employment>) => string | JSX.Element;
};

const formatNavItem = (id: string, label: string | JSX.Element) => (
	<Nav.Item key={id}>
		<Nav.Link className='rounded-0 text-light' eventKey={id}>
			{label}
		</Nav.Link>
	</Nav.Item>
);

const formatTabPane = (entry: WithId<Employment>, bgColor: string) => (
	<Tab.Pane key={entry.id} eventKey={entry.id}>
		<EmployHistoryDetails employment={entry} bgColor={bgColor} />
	</Tab.Pane>
);

const EmployHistoryDesktop: React.FC<EmployHistoryDesktopProps> = ({
	history,
	bgColor,
	fnFormatLabel,
}) => {
	const [tabs, setTabs] = useState<JSX.Element[]>([]);
	const [details, setDetails] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const newTabs: JSX.Element[] = [];
		const newDetails: JSX.Element[] = [];
		history.forEach(entry => {
			newTabs.push(formatNavItem(entry.id, fnFormatLabel(entry)));
			newDetails.push(formatTabPane(entry, bgColor));
		});
		setTabs(newTabs);
		setDetails(newDetails);
	}, [history]);

	return (
		<Tab.Container defaultActiveKey={history[0].id}>
			<Row>
				<Col className='pe-0' sm={3}>
					<Nav className='flex-column'>{tabs}</Nav>
				</Col>
				<Col className='ps-0' sm={9}>
					<Tab.Content>{details}</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default EmployHistoryDesktop;
