"use server";

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

export const getEpisodesByWebtoonId = async (webtoonId: number) => {
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
};

export const getEpisode = async (id: number) => {
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
};
