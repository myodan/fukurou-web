import { Container, HStack, Image, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import type { FC } from "react";
import { Button } from "~/components/ui/button";
import { getEpisode } from "~/libs/api";

type Props = Readonly<{
	params: Promise<{ id: string }>;
}>;

const EpisodePage: FC<Props> = async ({ params }) => {
	const { id } = await params;

	const episode = await getEpisode(+id);

	return (
		<Container display="flex" flexDirection="column" paddingY="4" gap="4">
			<VStack gap="0">
				{episode.contents.map((content, index) => (
					<Image key={content} asChild>
						<NextImage
							src={content}
							alt={`content-${index}`}
							width={690}
							height={0}
							quality={100}
						/>
					</Image>
				))}
			</VStack>
			<HStack justifyContent="center">
				<Button variant="outline" size="lg">
					이전화
				</Button>
				<Button size="lg">다음화</Button>
			</HStack>
		</Container>
	);
};

export default EpisodePage;
