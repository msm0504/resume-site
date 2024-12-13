import type { ReactElement } from 'react';
import { Grid2 as Grid, Tab, Tabs } from '@mui/material';
import { EmployHistoryViewProps } from './';
import EmployHistoryDetails from './details';
import { Employment, WithId } from '@/types';

type EmployHistoryDesktopProps = EmployHistoryViewProps;

const formatTab = (id: string, label: string | ReactElement) => (
	<Tab
		key={id}
		id={`employ-history-tab-${id}`}
		aria-controls={`employ-history-tabpanel-${id}`}
		value={id}
		label={label}
	/>
);

const formatTabPanel = (entry: WithId<Employment>, selectedId: string) => (
	<div
		key={entry.id}
		role='tabpanel'
		hidden={selectedId !== entry.id}
		id={`employ-history-tabpanel-${entry.id}`}
		aria-labelledby={`employ-history-tab-${entry.id}`}
	>
		{selectedId === entry.id && <EmployHistoryDetails employment={entry} />}
	</div>
);

const EmployHistoryDesktop: React.FC<EmployHistoryDesktopProps> = ({
	history,
	selected,
	fnOnSelect,
	fnFormatLabel,
}) => (
	<Grid container>
		<Grid size={3}>
			<Tabs
				orientation='vertical'
				value={selected}
				onChange={(_event, newValue) => fnOnSelect(newValue || '')}
				aria-label='Employment history tabs'
			>
				{history.map(entry => formatTab(entry.id, fnFormatLabel(entry)))}
			</Tabs>
		</Grid>
		<Grid size={9}>{history.map(entry => formatTabPanel(entry, selected))}</Grid>
	</Grid>
);

export default EmployHistoryDesktop;
