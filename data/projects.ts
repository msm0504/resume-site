import { Project } from '@/types';

export const PERSONAL_PROJECTS: Project[] = [
	{
		name: 'Media Bubbles',
		highlights: [
			{
				description:
					"[Media Bubbles](https://mediabubbles.net) is a news aggregator to show recent headlines either filtered according to political bias or from sources with various political leanings. Bing's News API is used to get the latest headlines; the bias ratings for the news sources are from [AllSides](https://www.allsides.com/media-bias/media-bias-ratings).",
				techs: ['React', 'Next.js', 'Typescript', 'Bootstrap', 'MongoDB'],
				techsHeading: 'Technologies Used',
				imagePath: '/project-images/media-bubbles/home.png',
				imageAltText: 'Media Bubbles home screen',
				imageWidth: 630,
				imageHeight: 280,
			},
			{
				description:
					'Users can search for recent news from outlets across the spectrum, outlets they agree with ("Stay in my Bubble"), outlets they disagree with ("Burst my Bubble"), or specific outlets of their choosing.',
				imagePath: '/project-images/media-bubbles/search.png',
				imageAltText: 'Media Bubbles search form',
				imageWidth: 630,
				imageHeight: 280,
			},
			{
				description:
					'The results from a given search can be saved and shared. Users that have logged in with a social media account can view their past saved results.',
				imagePath: '/project-images/media-bubbles/saved-result.png',
				imageAltText: 'Example of a Media Bubbles saved search result',
				imageWidth: 630,
				imageHeight: 280,
			},
		],
	},
];
