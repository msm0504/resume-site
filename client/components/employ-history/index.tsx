import Card from 'react-bootstrap/Card';

import DesktopView from './desktop-view';
import MobileView from './mobile-view';
import useMediaQuery, { LG_MIN_WIDTH } from '@/client/hooks/use-media-query';
import { Employment, WithId } from '@/types/index';

type EmployHistoryProps = {
	history: WithId<Employment>[];
	bgColor?: string;
};

const formatEntryLabel = (entry: WithId<Employment>) => (
	<div className='d-block'>
		<h3 className='m-0 p-0'>
			<Card.Title className='fw-bold'>{entry.companyName}</Card.Title>
		</h3>
		<Card.Subtitle>
			{entry.city}, {entry.state}
		</Card.Subtitle>
		<Card.Subtitle className='mb-2'>
			{entry.start} - {entry.end}
		</Card.Subtitle>
	</div>
);

const EmployHistory: React.FC<EmployHistoryProps> = ({ history, bgColor = 'secondary' }) => {
	const [width] = useMediaQuery();

	if (!history || !history.length) return null;

	const View = width >= LG_MIN_WIDTH ? DesktopView : MobileView;

	return <View history={history} bgColor={bgColor} fnFormatLabel={formatEntryLabel} />;
};

export default EmployHistory;
