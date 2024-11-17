import { Flex, For, HStack, Heading, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";
import type { Webtoon } from "~/libs/api";
import { Tag } from "../ui/tag";

type Props = Readonly<{
	webtoon: Webtoon;
}>;

export const WebtoonDetail: FC<Props> = ({ webtoon }) => {
	return (
		<Flex minHeight="64" gap="4">
			<Flex height="64" aspectRatio={3 / 4} position="relative">
				<Image
					src={webtoon.thumbnailUrl}
					alt="thumbnail"
					loading="lazy"
					rounded="md"
					objectFit="cover"
				/>
			</Flex>
			<Flex flexDirection="column" gap="2" flexGrow="1">
				<Heading>{webtoon.title}</Heading>
				<Text whiteSpace="pre-wrap">{webtoon.synopsis}</Text>
				<HStack gap="1" flexWrap="wrap">
					<For each={webtoon.tags}>
						{(tag) => <Tag key={tag.id}>{tag.name}</Tag>}
					</For>
				</HStack>
			</Flex>
		</Flex>
	);
};
