'use client';
import { type ReactElement, useState } from 'react';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import DesktopView from './desktop-view';
import MobileView from './mobile-view';
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
	<Stack spacing={1}>
		<Typography variant='h6' fontWeight='bold'>
			{entry.companyName}
		</Typography>
		<Box>
			{entry.city}
			{entry.state ? `, ${entry.state}` : null}
		</Box>
		<Box>
			{entry.start} - {entry.end}
		</Box>
	</Stack>
);

const EmployHistory: React.FC<EmployHistoryProps> = ({ history }) => {
	const [selected, setSelected] = useState<string>(history[0]?.id || '');
	const theme = useTheme();
	const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

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
