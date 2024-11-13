"use server";

export interface Webtoon {
	id: number;
	title: string;
	synopsis: string;
	thumbnailUrl: string;
	daysOfWeek: string[];
	isAdult: boolean;
	isFinished: boolean;
	createdAt: Date;
	updatedAt: Date;
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
