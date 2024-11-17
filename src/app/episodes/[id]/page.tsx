import { Container, Image } from "@chakra-ui/react";
import type { FC } from "react";
import { getEpisode } from "~/libs/api";

type Props = Readonly<{
	params: Promise<{ id: string }>;
}>;

const EpisodePage: FC<Props> = async ({ params }) => {
	const { id } = await params;

	const episode = await getEpisode(+id);

	return (
		<Container display="flex" flexDirection="column" alignItems="center">
			{episode.contents.map((content, index) => (
				<Image
					key={content}
					src={content}
					alt={`content-${index}`}
					width="full"
				/>
			))}
		</Container>
	);
};

export default EpisodePage;
