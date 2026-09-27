import { Tabs } from '@base-ui/react';
import { EmployHistoryViewProps } from './';
import EmployHistoryDetails from './details';

type EmployHistoryDesktopProps = EmployHistoryViewProps;

const EmployHistoryDesktop: React.FC<EmployHistoryDesktopProps> = ({
	history,
	selected,
	fnOnSelect,
	fnFormatLabel,
}) => (
	<Tabs.Root
		className='grid grid-cols-4'
		value={selected}
		onValueChange={newValue => fnOnSelect(newValue)}
	>
		<Tabs.List className='col-span-1 flex flex-col items-center gap-4'>
			{history.map(entry => (
				<Tabs.Tab className='not-data-active:text-gray-400' key={entry.id} value={entry.id}>
					{fnFormatLabel(entry)}
				</Tabs.Tab>
			))}
		</Tabs.List>
		<div className='col-span-3'>
			{history.map(entry => (
				<Tabs.Panel key={entry.id} value={entry.id}>
					<EmployHistoryDetails employment={entry} />
				</Tabs.Panel>
			))}
		</div>
	</Tabs.Root>
);

export default EmployHistoryDesktop;
