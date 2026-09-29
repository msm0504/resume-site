import Image from 'next/image';
import Notes from './notes';
import TechsList from './techs-list';
import { DescriptionWithImage } from '@/types';

type DescriptWithImgProps = {
	item: DescriptionWithImage;
	imageLeft?: boolean;
};

const DescriptWithImg: React.FC<DescriptWithImgProps> = ({ item, imageLeft = false }) => (
	<div className={`flex flex-col ${imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
		<div className='mb-4 basis-1/2 md:pt-12'>
			<Notes notes={[item.description]} showLargerFont />
			{item.techs && item.techs.length ? (
				<>
					<h6
						className={`font-semibold text-sand-700 dark:text-sand-300 ${imageLeft ? 'text-right' : 'text-left'}`}
					>
						{item.techsHeading}
					</h6>
					<TechsList technologies={item.techs} align={imageLeft ? 'right' : 'left'} />
				</>
			) : null}
		</div>
		<div className='mx-auto basis-1/2 text-center'>
			<Image
				src={item.imagePath}
				alt={item.imageAltText}
				width={item.imageWidth}
				height={item.imageHeight}
			/>
		</div>
	</div>
);

export default DescriptWithImg;
