import type { ComponentProps } from 'react';
import Link from 'next/link';
import { Button as BaseButton } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/util/cn';
import tw from '@/util/tailwind-template';

type Color = 'gray' | 'sand';
type Variant = 'contained' | 'outlined' | 'text';

type CvaColorVarConfig = {
	variants: {
		color: Record<Color, string>;
		variant: Record<Variant, string>;
	};
	compoundVariants: {
		color: Color;
		variant: Variant;
		class: string;
	}[];
};

const BUTTON_CVA_CONFIG: CvaColorVarConfig = {
	variants: {
		color: {
			gray: '',
			sand: '',
		},
		variant: {
			contained: tw`data-disabled:bg-gray-200 data-disabled:text-gray-400`,
			outlined: tw`border border-solid data-disabled:border-gray-400 data-disabled:text-gray-400`,
			text: tw`data-disabled:text-gray-400`,
		},
	},
	compoundVariants: [
		{
			color: 'gray',
			variant: 'contained',
			class: tw`not-data-disabled:bg-gray-950 not-data-disabled:text-gray-100 hover:not-data-disabled:bg-gray-700 focus-visible:outline-gray-950 dark:not-data-disabled:bg-gray-100 dark:not-data-disabled:text-gray-950 dark:hover:not-data-disabled:bg-gray-300 dark:focus-visible:outline-gray-100`,
		},
		{
			color: 'gray',
			variant: 'outlined',
			class: tw`not-data-disabled:border-gray-950 not-data-disabled:bg-gray-100 not-data-disabled:text-gray-950 hover:not-data-disabled:bg-gray-200 focus-visible:outline-gray-950 dark:not-data-disabled:border-gray-100 dark:not-data-disabled:bg-gray-950 dark:not-data-disabled:text-gray-100 dark:hover:not-data-disabled:bg-gray-800 dark:focus-visible:outline-gray-100`,
		},
		{
			color: 'gray',
			variant: 'text',
			class: tw`not-data-disabled:bg-inherit not-data-disabled:text-gray-950 hover:not-data-disabled:bg-gray-200 focus-visible:outline-gray-950 dark:not-data-disabled:text-gray-100 dark:hover:not-data-disabled:bg-gray-800 dark:focus-visible:outline-gray-100`,
		},

		{
			color: 'sand',
			variant: 'contained',
			class: tw`not-data-disabled:bg-sand-700 not-data-disabled:text-gray-100 hover:not-data-disabled:bg-sand-500 focus-visible:outline-sand-700 dark:not-data-disabled:bg-sand-300 dark:not-data-disabled:text-gray-950 dark:hover:not-data-disabled:bg-sand-500 dark:focus-visible:outline-sand-300`,
		},
		{
			color: 'sand',
			variant: 'outlined',
			class: tw`not-data-disabled:border-sand-700 not-data-disabled:bg-gray-100 not-data-disabled:text-sand-700 hover:not-data-disabled:bg-gray-200 focus-visible:outline-sand-700 dark:not-data-disabled:border-sand-300 dark:not-data-disabled:bg-gray-950 dark:not-data-disabled:text-sand-300 dark:hover:not-data-disabled:bg-gray-800 dark:focus-visible:outline-sand-300`,
		},
		{
			color: 'sand',
			variant: 'text',
			class: tw`not-data-disabled:bg-inherit not-data-disabled:text-sand-700 hover:not-data-disabled:bg-gray-200 focus-visible:outline-sand-700 dark:not-data-disabled:text-sand-300 dark:hover:not-data-disabled:bg-gray-800 dark:focus-visible:outline-sand-300`,
		},
	],
};

const buttonVariants = cva(
	'flex h-8 items-center justify-center gap-2 rounded-sm px-4 py-5 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
	{
		...BUTTON_CVA_CONFIG,
		defaultVariants: {
			color: 'gray',
			variant: 'contained',
		},
	}
);

type ButtonProps = VariantProps<typeof buttonVariants> & BaseButton.Props;
type LinkProps = VariantProps<typeof buttonVariants> & ComponentProps<typeof Link>;
type ActionProps = ButtonProps | LinkProps;

const isLink = (props: ActionProps): props is LinkProps => {
	return !!(props as LinkProps).href;
};
const isButton = (props: ActionProps): props is ButtonProps => {
	return !!(props as ButtonProps).onClick || props.type === 'submit';
};

const Button: React.FC<ActionProps> = ({ color, variant, className, children, ...props }) => {
	if (isLink(props)) {
		return props.href?.toString().startsWith('/') ? (
			<Link
				className={cn(buttonVariants({ color, variant }), className, 'no-underline')}
				{...props}
			>
				{children}
			</Link>
		) : (
			<a
				className={cn(buttonVariants({ color, variant }), className, 'no-underline')}
				{...props}
				href={props.href?.toString()}
			>
				{children}
			</a>
		);
	}

	if (isButton(props)) {
		return (
			<BaseButton className={cn(buttonVariants({ color, variant }), className)} {...props}>
				{children}
			</BaseButton>
		);
	}

	return null;
};

export default Button;
