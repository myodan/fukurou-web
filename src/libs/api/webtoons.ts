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

export interface Tag {
	id: number;
	name: string;
}

export async function getWebtoons() {
	const response = await fetch(`${process.env.FUKUROU_API_BASE_URL}/webtoons`, {
		next: {
			revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
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
				revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
			},
		},
	);

	const data: Webtoon = await response.json();

	return data;
}
