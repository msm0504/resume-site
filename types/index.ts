export type WithId<T> = T & {
	id: string;
};

export type Project = {
	highlights: string[];
	techsUsed?: string[];
	name?: string;
	start?: string;
	end?: string;
	apisUsed?: string[];
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
	projects: Project[];
};

export type Education = {
	schoolName: string;
	city: string;
	state: string;
	gradDate: string;
	highlights: string[];
};
