export type WithId<T> = T & {
	id: string;
};

export type Role = {
	highlights: string[];
	techsUsed?: string[];
	name?: string;
	start?: string;
	end?: string;
};

export type TitleDuration = {
	title: string;
	start: string;
	end: string;
};

export type Employment = {
	companyName: string;
	city: string;
	state: string;
	start: string;
	end: string;
	titles: string | TitleDuration[];
	roles: Role[];
};

export type Education = {
	schoolName: string;
	city: string;
	state: string;
	gradDate: string;
	highlights: string[];
};

export type DescriptionWithImage = {
	description: string;
	techs?: string[];
	techsHeading?: string;
	imagePath: string;
	imageAltText: string;
	imageWidth: number;
	imageHeight: number;
};

export type Project = {
	name: string;
	highlights: DescriptionWithImage[];
};

export type ParentCompProps = Readonly<{
	children: React.ReactNode;
}>;
