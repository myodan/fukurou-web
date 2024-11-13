import {
	Code,
	Container,
	For,
	Grid,
	HStack,
	Stack,
	VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import NextLink from "next/link";
import type { FC } from "react";
import { Button } from "~/components/ui/button";
import { getProfile, getToken } from "~/libs/api/auth";
import { getWebtoons } from "~/libs/api/webtoons";
import { WebtoonListItem } from "../components/webtoons/item";

const HomePage: FC = async () => {
	const token = await getToken();
	const user = await getProfile();
	const webtoons = await getWebtoons();

	return (
		<Container>
			<Stack py="4" gap="4">
				<Code as="pre" padding="4">
					{JSON.stringify(user, null, 2)}
				</Code>
				<Code as="pre" padding="4">
					{JSON.stringify(token, null, 2)}
				</Code>
				<VStack alignItems="stretch">
					<HStack justify="space-between">
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
					<Grid templateColumns="repeat(5, 1fr)" gap="4">
						<For each={webtoons.slice(0, 5)}>
							{(webtoon) => (
								<WebtoonListItem key={webtoon.id} webtoon={webtoon} />
							)}
						</For>
					</Grid>
				</VStack>
			</Stack>
		</Container>
	);
};

export default HomePage;
