import { Flex, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";
import type { Webtoon } from "~/libs/api";

type Props = Readonly<{
	webtoon: Webtoon;
}>;

export const WebtoonListItem: FC<Props> = ({ webtoon }) => {
	return (
		<NextLink href={`/webtoons/${webtoon.id}`} passHref>
			<Flex flexDirection="column" gap="1">
				<Flex
					position="relative"
					aspectRatio={3 / 4}
					borderWidth="1px"
					rounded="md"
					overflow="hidden"
				>
					<Image
						src={webtoon.thumbnailUrl}
						alt={webtoon.title}
						loading="lazy"
						objectFit="cover"
						transition="all"
						_hover={{ scale: 1.05 }}
					/>
				</Flex>
				<Text textAlign={"center"} lineClamp={1}>
					{webtoon.title}
				</Text>
			</Flex>
		</NextLink>
	);
};
