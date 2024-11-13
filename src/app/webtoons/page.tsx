import { Container } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import type { FC } from "react";
import { WebtoonHeader } from "~/components/webtoons/header";
import { WebtoonList } from "~/components/webtoons/list";
import { getWebtoons } from "~/libs/api";

export const dynamic = "force-dynamic";

type Props = Readonly<{
	searchParams: Promise<{ tab?: string }>;
}>;

const WebtoonPage: FC<Props> = async ({ searchParams }) => {
	const { tab = "all" } = await searchParams;

	if (!["all", "mon", "tue", "wed", "thu", "fri", "sat", "sun"].includes(tab)) {
		return notFound();
	}

	const webtoons = await getWebtoons();

	const filteredWebtoons = webtoons.filter((webtoon) =>
		webtoon.daysOfWeek.includes(tab.toUpperCase()),
	);

	return (
		<>
			<WebtoonHeader />
			<Container marginY="4">
				<WebtoonList webtoons={tab === "all" ? webtoons : filteredWebtoons} />
			</Container>
		</>
	);
};

export default WebtoonPage;
