"use client";

import { Center, For, HStack, Stack } from "@chakra-ui/react";
import { type FC, useState } from "react";
import type { Episode } from "~/libs/api";
import {
	PaginationItems,
	PaginationNextTrigger,
	PaginationPrevTrigger,
	PaginationRoot,
} from "../ui/pagination";
import { EpisodeListItem } from "./item";

type Props = Readonly<{
	episodes: Episode[];
}>;

export const EpisodeList: FC<Props> = ({ episodes }) => {
	const [page, setPage] = useState(1);

	const startRange = (page - 1) * 10;
	const endRange = startRange + 10;

	const visibleEpisodes = episodes.slice(startRange, endRange);

	return (
		<>
			<Stack>
				<For each={visibleEpisodes}>
					{(episode) => <EpisodeListItem key={episode.id} episode={episode} />}
				</For>
			</Stack>
			<Center>
				<PaginationRoot
					count={episodes.length}
					siblingCount={2}
					pageSize={10}
					onPageChange={(e) => setPage(e.page)}
				>
					<HStack>
						<PaginationPrevTrigger />
						<PaginationItems />
						<PaginationNextTrigger />
					</HStack>
				</PaginationRoot>
			</Center>
		</>
	);
};
