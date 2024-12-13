import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
	rules: {
		userAgent: '*',
		allow: '/',
		disallow: '/private/',
	},
	host: 'https://markmonday.com',
	sitemap: 'https://markmonday.com/sitemap.xml',
});

export default robots;
