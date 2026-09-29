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
		<Tabs.List className='relative z-1 col-span-1 flex flex-col items-center gap-4'>
			{history.map(entry => (
				<Tabs.Tab
					className='not-data-active:text-gray-600 dark:not-data-active:text-gray-400'
					key={entry.id}
					value={entry.id}
				>
					{fnFormatLabel(entry)}
				</Tabs.Tab>
			))}
			<Tabs.Indicator className='absolute top-0 right-0 -z-1 h-(--active-tab-height) w-0 translate-y-(--active-tab-top) border-r-2 border-gray-950 bg-inherit transition-[translate,height] duration-150 ease-in-out dark:border-gray-100' />
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
