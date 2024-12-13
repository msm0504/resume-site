import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: 'https://markmonday.com',
			lastModified: new Date(),
		},
		{
			url: 'https://markmonday.com/about',
			lastModified: new Date(),
		},
		{
			url: 'https://markmonday.com/projects',
			lastModified: new Date(),
		},
	];
};

export default sitemap;
