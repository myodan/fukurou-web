import { Flex, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";
import type { Episode } from "~/libs/api";

type Props = Readonly<{
	episode: Episode;
}>;

export const EpisodeListItem: FC<Props> = ({ episode }) => {
	return (
		<NextLink href={`/episodes/${episode.id}`} passHref>
			<Flex
				gap="4"
				padding="2"
				borderWidth="1px"
				rounded={"md"}
				transition={"all"}
				_hover={{ background: "bg.subtle" }}
			>
				<Flex height="16" aspectRatio={16 / 9} position={"relative"}>
					<Image
						src={episode.thumbnailUrl}
						alt="thumbnail"
						loading="lazy"
						rounded={"md"}
						objectFit={"cover"}
					/>
				</Flex>
				<Flex
					flexBasis={"full"}
					flexDirection={"column"}
					justifyContent={"space-between"}
					gap="4"
				>
					<Text fontSize={"lg"}>{episode.subtitle}</Text>
					<Text fontSize={"sm"} color={"fg.muted"}>
						{new Date(episode.createdAt).toLocaleDateString()}
					</Text>
				</Flex>
			</Flex>
		</NextLink>
	);
};
