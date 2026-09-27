import type { ComponentProps } from 'react';
import { default as NextLink } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/util/cn';
import tw from '@/util/tailwind-template';

const LINK_CVA_CONFIG = {
	variants: {
		color: {
			gray: tw`not-data-disabled:text-gray-300 hover:not-data-disabled:text-gray-500 focus-visible:outline-gray-300`,
			sand: tw`not-data-disabled:text-sand-300 hover:not-data-disabled:text-sand-500 focus-visible:outline-sand-300`,
		},
	},
};

const linkVariants = cva(
	'no-underline hover:not-data-disabled:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 data-disabled:text-slate-400 dark:data-disabled:text-slate-600',
	{
		...LINK_CVA_CONFIG,
		defaultVariants: {
			color: 'gray',
		},
	}
);

type LinkProps = ComponentProps<typeof NextLink> & VariantProps<typeof linkVariants>;

const Link: React.FC<LinkProps> = ({ color, className, children, href, ...props }) =>
	href.toString().startsWith('/') ? (
		<NextLink className={cn(linkVariants({ color }), className)} href={href} {...props}>
			{children}
		</NextLink>
	) : (
		<a className={cn(linkVariants({ color }), className)} href={href.toString()} {...props}>
			{children}
		</a>
	);

export default Link;
