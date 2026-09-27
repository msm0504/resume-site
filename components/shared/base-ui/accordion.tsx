import { Accordion as BaseAccordion } from '@base-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import cn from '@/util/cn';

export const Root: React.FC<BaseAccordion.Root.Props> = ({ children, className, ...props }) => (
	<BaseAccordion.Root className={className} {...props}>
		{children}
	</BaseAccordion.Root>
);

export const Item: React.FC<BaseAccordion.Item.Props> = ({ children, className, ...props }) => (
	<BaseAccordion.Item className={className} {...props}>
		{children}
	</BaseAccordion.Item>
);

export const Header: React.FC<BaseAccordion.Header.Props> = ({ children, className, ...props }) => (
	<BaseAccordion.Header className={className} {...props}>
		{children}
	</BaseAccordion.Header>
);

export const Trigger: React.FC<BaseAccordion.Trigger.Props> = ({
	children,
	className,
	...props
}) => (
	<BaseAccordion.Trigger
		className={cn(
			'group flex w-full items-center justify-between gap-4 bg-transparent px-3 py-2 text-left',
			className
		)}
		{...props}
	>
		{children}
		<FontAwesomeIcon
			className='shrink-0 transition-transform duration-100 ease-[ease-out] group-data-panel-open:rotate-180'
			icon={faChevronDown}
		/>
	</BaseAccordion.Trigger>
);

export const Panel: React.FC<BaseAccordion.Panel.Props> = ({ children, className, ...props }) => (
	<BaseAccordion.Panel
		className={cn(
			'h-(--accordion-panel-height) overflow-hidden py-4 transition-[height] duration-150 ease-[ease-out] data-ending-style:h-0 data-starting-style:h-0',
			className
		)}
		{...props}
	>
		{children}
	</BaseAccordion.Panel>
);
