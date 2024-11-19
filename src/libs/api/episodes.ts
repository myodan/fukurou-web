"use server";

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

export async function getEpisodesByWebtoonId(webtoonId: number) {
	const response = await fetch(
		`${process.env.FUKUROU_API_BASE_URL}/webtoons/${webtoonId}/episodes`,
		{
			next: {
				revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
			},
		},
	);

	const data: Episode[] = await response.json();

	return data;
}

export async function getEpisode(id: number) {
	const response = await fetch(
		`${process.env.FUKUROU_API_BASE_URL}/episodes/${id}`,
		{
			next: {
				revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
			},
		},
	);

	const data: Episode = await response.json();

	return data;
}
