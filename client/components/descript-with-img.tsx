import Image from 'next/image';

import Notes from './notes';
import TechsList from './techs-list';
import { DescriptionWithImage } from '@/types/index';

type DescriptWithImgProps = {
	item: DescriptionWithImage;
	imageLeft?: boolean;
};

const DescriptWithImg: React.FC<DescriptWithImgProps> = ({ item, imageLeft = false }) => (
	<div className={`d-flex flex-column flex-md-row${imageLeft ? '-reverse' : ''}`}>
		<div className='pt-md-5 mb-3' style={{ flexBasis: '50%' }}>
			<Notes notes={[item.description]} />
			{item.techs && item.techs.length ? (
				<>
					<div className={`h6 fw-semibold text-info${imageLeft ? ' text-end' : ''}`}>
						{item.techsHeading}
					</div>
					<TechsList technologies={item.techs} align={imageLeft ? 'right' : 'left'} />
				</>
			) : null}
		</div>
		<div className='text-center mx-auto' style={{ flexBasis: '50%' }}>
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
