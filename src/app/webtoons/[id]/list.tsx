import { Flex, For } from "@chakra-ui/react";
import type { FC } from "react";
import type { Episode } from "~/libs/api/fukurou";
import { EpisodeListItem } from "./item";

type Props = Readonly<{
	episodes: Episode[];
}>;

export const EpisodeList: FC<Props> = ({ episodes }) => {
	return (
		<Flex flexDirection="column" gap="2">
			<For each={episodes}>
				{(episode) => <EpisodeListItem key={episode.id} episode={episode} />}
			</For>
		</Flex>
	);
};
