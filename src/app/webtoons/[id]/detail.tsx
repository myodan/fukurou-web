import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import type { FC } from "react";
import type { Webtoon } from "~/libs/api/fukurou";

type Props = Readonly<{
	webtoon: Webtoon;
}>;

export const WebtoonDetail: FC<Props> = ({ webtoon }) => {
	return (
		<Flex height="64" gap="4">
			<Flex height="full" aspectRatio={3 / 4} position="relative">
				<Image rounded="md" objectFit="cover" asChild>
					<NextImage src={webtoon.thumbnailUrl} alt="thumbnail" fill />
				</Image>
			</Flex>
			<Flex flexDirection="column" gap="2">
				<Heading>{webtoon.title}</Heading>
				<Text whiteSpace="pre-wrap">{webtoon.synopsis}</Text>
			</Flex>
		</Flex>
	);
};
