export type Webtoon = {
	id: number;
	title: string;
	synopsis: string;
	thumbnailUrl: string;
	daysOfWeek: string[];
	isAdult: boolean;
	isFinished: boolean;
	createdAt: Date;
	updatedAt: Date;
};

export const getWebtoons = async () => {
	const response = await fetch(`${process.env.FUKUROU_APU_BASE_URL}/webtoons`);
	const data: Webtoon[] = await response.json();
	return data;
};

export const getWebtoon = async (id: number) => {
	const response = await fetch(
		`${process.env.FUKUROU_APU_BASE_URL}/webtoons/${id}`,
	);
	const data: Webtoon = await response.json();
	return data;
};

export type Episode = {
	id: number;
	episodeNumber: number;
	subtitle: string;
	thumbnailUrl: string;
	webtoonId: number;
	contents: string[];
	createdAt: Date;
	updatedAt: Date;
};

export const getEpisodes = async (webtoonId: number) => {
	const response = await fetch(
		`${process.env.FUKUROU_APU_BASE_URL}/webtoons/${webtoonId}/episodes`,
	);
	const data: Episode[] = await response.json();
	return data;
};
