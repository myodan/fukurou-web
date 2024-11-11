import { Container } from "@chakra-ui/react";
import type { FC } from "react";
import { getWebtoons } from "~/libs/api/fukurou";
import { WebtoonHeader } from "./header";
import { WebtoonList } from "./list";

export const dynamic = "force-dynamic";

type Props = Readonly<{
	searchParams: Promise<{ tab?: string }>;
}>;

const WebtoonPage: FC<Props> = async ({ searchParams }) => {
	const { tab = "all" } = await searchParams;

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
