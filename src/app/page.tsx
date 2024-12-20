import {
	Container,
	For,
	Grid,
	HStack,
	Heading,
	Stack,
	VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import NextLink from "next/link";
import type { FC } from "react";
import { Button } from "~/components/ui/button";
import { getWebtoons } from "~/libs/api/webtoons";
import { WebtoonListItem } from "../components/webtoons/item";

const HomePage: FC = async () => {
	const webtoons = await getWebtoons();

	return (
		<Container marginY="4">
			<Stack>
				<HStack justify="space-between">
					<Heading>최근 업데이트 웹툰</Heading>
					<NextLink
						href={{
							pathname: "/webtoons",
						}}
						passHref
					>
						<Button variant="ghost" size="sm">
							전체보기 <ArrowRight />
						</Button>
					</NextLink>
				</HStack>
				<Grid
					templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
					gap="4"
				>
					<For each={webtoons.slice(0, 5)}>
						{(webtoon) => (
							<WebtoonListItem key={webtoon.id} webtoon={webtoon} />
						)}
					</For>
				</Grid>
			</Stack>
		</Container>
	);
};

export default HomePage;
