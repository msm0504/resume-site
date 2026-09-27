'use client';
import { type ReactElement, useState } from 'react';
import DesktopView from './desktop-view';
import MobileView from './mobile-view';
import useScreenSize, { MD_MIN_WIDTH } from '../shared/use-screen-size';
import { Employment, WithId } from '@/types';

type EmployHistoryProps = {
	history: WithId<Employment>[];
};

export type EmployHistoryViewProps = {
	history: WithId<Employment>[];
	selected: string;
	fnOnSelect: (eventKey: string) => void;
	fnFormatLabel: (entry: WithId<Employment>) => string | ReactElement;
};

const formatEntryLabel = (entry: WithId<Employment>) => (
	<div className='flex flex-col gap-1'>
		<div className='text-xl font-bold'>{entry.companyName}</div>
		<div className='text-lg'>
			{entry.city}
			{entry.state ? `, ${entry.state}` : null}
		</div>
		<div className='text-lg'>
			{entry.start} - {entry.end}
		</div>
	</div>
);

const EmployHistory: React.FC<EmployHistoryProps> = ({ history }) => {
	const [selected, setSelected] = useState<string>(history[0]?.id || '');
	const [width] = useScreenSize();
	const isMdScreen = width >= MD_MIN_WIDTH;

	if (!history || !history.length) return null;

	const View = isMdScreen ? DesktopView : MobileView;

	return (
		<View
			history={history}
			selected={selected}
			fnOnSelect={(eventKey: string) => setSelected(eventKey)}
			fnFormatLabel={formatEntryLabel}
		/>
	);
};

export default EmployHistory;
