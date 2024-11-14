"use server";

export interface Webtoon {
	id: number;
	title: string;
	synopsis: string;
	thumbnailUrl: string;
	daysOfWeek: string[];
	tags: Tag[];
	isAdult: boolean;
	isFinished: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface Episode {
	id: number;
	episodeNumber: number;
	subtitle: string;
	thumbnailUrl: string;
	webtoonId: number;
	contents: string[];
	createdAt: Date;
	updatedAt: Date;
}

export interface Tag {
	id: number;
	name: string;
}

export async function getWebtoons() {
	const response = await fetch(`${process.env.FUKUROU_API_BASE_URL}/webtoons`, {
		next: {
			revalidate: 3600,
		},
	});
	const data: Webtoon[] = await response.json();
	return data;
}

export async function getWebtoon(id: number) {
	const response = await fetch(
		`${process.env.FUKUROU_API_BASE_URL}/webtoons/${id}`,
		{
			next: {
				revalidate: 3600,
			},
		},
	);
	const data: Webtoon = await response.json();
	return data;
}

export async function getWebtoonEpisodes(
	webtoonId: number,
	options: {
		page: number;
	} = {
		page: 1,
	},
) {
	const response = await fetch(
		`${process.env.FUKUROU_API_BASE_URL}/webtoons/${webtoonId}/episodes?page=${options.page}`,
		{
			next: {
				revalidate: 3600,
			},
		},
	);
	const data: Episode[] = await response.json();
	return data;
}
