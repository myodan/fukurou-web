import { Button, Container, Flex } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import type { FC } from "react";
import { EpisodeList } from "~/components/episodes/list";
import { WebtoonDetail } from "~/components/webtoons/detail";
import { getWebtoon, getWebtoonEpisodes } from "~/libs/api";

type Props = Readonly<{
	params: Promise<{ id: string }>;
	searchParams: Promise<{ page: string }>;
}>;

const WebtoonDetailPage: FC<Props> = async ({ params, searchParams }) => {
	const { id } = await params;
	const { page = "1" } = await searchParams;

	const webtoon = await getWebtoon(+id);
	const episodes = await getWebtoonEpisodes(+id, { page: +page });

	return (
		<Container display="flex" flexDirection="column" gap="4" marginY="4">
			<WebtoonDetail webtoon={webtoon} />

			<Flex gap="4">
				<Button size="xl" flexGrow="1">
					<Plus /> 관심
				</Button>
				<Button variant="outline" size="xl" flexGrow="1">
					첫화보기
				</Button>
			</Flex>

			<EpisodeList episodes={episodes} />
		</Container>
	);
};

export default WebtoonDetailPage;
