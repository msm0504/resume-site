import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { nanoid } from 'nanoid';

import DesktopView from './desktop-view';
import MobileView from './mobile-view';
import useMediaQuery, { LG_MIN_WIDTH } from '../../hooks/use-media-query';
import { Employment, WithId } from '../../../types';

type EmployHistoryProps = {
	history: Employment[];
};

const formatEntryLabel = (entry: WithId<Employment>) => (
	<div className='d-block'>
		<Card.Title>{entry.companyName}</Card.Title>
		<Card.Subtitle>
			{entry.city}, {entry.state}
		</Card.Subtitle>
		<Card.Subtitle className='mb-2'>
			{entry.start} - {entry.end}
		</Card.Subtitle>
	</div>
);

const EmployHistory: React.FC<EmployHistoryProps> = ({ history }) => {
	const [withIds, setWithIds] = useState<WithId<Employment>[]>([]);
	const [width] = useMediaQuery();

	useEffect(() => {
		setWithIds(history.map(entry => ({ id: nanoid(10), ...entry })));
	}, [history]);

	if (!withIds || !withIds.length) return null;

	const View = width >= LG_MIN_WIDTH ? DesktopView : MobileView;

	return (
		<div className='bg-secondary'>
			<section
				id='prof-experience'
				style={{ maxWidth: '1200px' }}
				className='mx-auto my-0 px-3 py-5'
			>
				<View history={withIds} fnFormatLabel={formatEntryLabel} />
			</section>
		</div>
	);
};

export default EmployHistory;
