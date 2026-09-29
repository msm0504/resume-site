import { EmployHistoryViewProps } from './';
import EmployHistoryDetails from './details';
import { Accordion } from '../shared/base-ui';

type EmployHistoryMobileProps = EmployHistoryViewProps;

const EmployHistoryMobile: React.FC<EmployHistoryMobileProps> = ({
	history,
	selected,
	fnOnSelect,
	fnFormatLabel,
}) => (
	<Accordion.Root
		value={[selected]}
		onValueChange={value => fnOnSelect(value.length ? value[0] : '')}
	>
		{history.map(entry => (
			<Accordion.Item key={entry.id} value={entry.id}>
				<Accordion.Header>
					<Accordion.Trigger>{fnFormatLabel(entry)}</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<EmployHistoryDetails employment={entry} />
				</Accordion.Panel>
			</Accordion.Item>
		))}
	</Accordion.Root>
);

export default EmployHistoryMobile;
