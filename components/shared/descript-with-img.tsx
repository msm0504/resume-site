import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import Notes from './notes';
import TechsList from './techs-list';
import { DescriptionWithImage } from '@/types';

type DescriptWithImgProps = {
	item: DescriptionWithImage;
	imageLeft?: boolean;
};

const DescriptWithImg: React.FC<DescriptWithImgProps> = ({ item, imageLeft = false }) => (
	<Stack direction={{ xs: 'column', md: imageLeft ? 'row-reverse' : 'row' }}>
		<Box marginBottom={4} paddingTop={{ md: 12 }} flexBasis='50%'>
			<Notes notes={[item.description]} showLargerFont />
			{item.techs && item.techs.length ? (
				<>
					<Typography
						variant='h6'
						fontWeight='semibold'
						color='info'
						textAlign={imageLeft ? 'right' : 'left'}
					>
						{item.techsHeading}
					</Typography>
					<TechsList technologies={item.techs} align={imageLeft ? 'right' : 'left'} />
				</>
			) : null}
		</Box>
		<Box marginX='auto' textAlign='center' flexBasis='50%'>
			<Image
				src={item.imagePath}
				alt={item.imageAltText}
				width={item.imageWidth}
				height={item.imageHeight}
			/>
		</Box>
	</Stack>
);

export default DescriptWithImg;
