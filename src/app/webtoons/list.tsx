import { For, Grid } from "@chakra-ui/react";
import type { FC } from "react";
import type { Webtoon } from "~/libs/api/fukurou";
import { WebtoonListItem } from "./item";

type Props = Readonly<{
	webtoons: Webtoon[];
}>;

export const WebtoonList: FC<Props> = ({ webtoons }) => {
	return (
		<Grid templateColumns={"repeat(7, 1fr)"} gap="2">
			<For each={webtoons}>
				{(webtoon) => <WebtoonListItem key={webtoon.id} webtoon={webtoon} />}
			</For>
		</Grid>
	);
};
