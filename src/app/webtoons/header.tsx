"use client";

import { Container, For, chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import type { FC } from "react";

const webtoonHeaderItems = [
	{ id: "all", name: "전체" },
	{ id: "mon", name: "월" },
	{ id: "tue", name: "화" },
	{ id: "wed", name: "수" },
	{ id: "thu", name: "목" },
	{ id: "fri", name: "금" },
	{ id: "sat", name: "토" },
	{ id: "sun", name: "일" },
];

const WebtoonHeaderRoot = chakra("header", {
	base: {
		display: "flex",
		height: "10",
		position: "sticky",
		zIndex: "sticky",
		top: "16",
		background: "bg.panel",
		borderBottomWidth: "1px",
	},
});

const WebtoonHeaderContainer = chakra(Container, {
	base: {
		display: "flex",
	},
});

const WebtoonHeaderItemList = chakra("div", {
	base: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "stretch",
		gap: "4",
	},
});

const WebtoonHeaderItem = chakra(NextLink, {
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "2",
		fontSize: "sm",
		color: "fg.muted",
		borderBottomWidth: "2px",
		borderColor: "transparent",
		transition: "border-color 0.2s",
		_currentPage: {
			color: "fg",
			borderColor: "fg",
		},
		_hover: {
			color: "fg",
			borderColor: "border",
		},
	},
});

export const WebtoonHeader: FC = () => {
	const searchParams = useSearchParams();
	const tab = searchParams.get("tab") || "all";

	return (
		<WebtoonHeaderRoot>
			<WebtoonHeaderContainer>
				<WebtoonHeaderItemList>
					<For each={webtoonHeaderItems}>
						{(item, index) => (
							<WebtoonHeaderItem
								key={index}
								href={{
									pathname: "/webtoons",
									query: { tab: item.id },
								}}
								aria-current={item.id === tab ? "page" : undefined}
							>
								{item.name}
							</WebtoonHeaderItem>
						)}
					</For>
				</WebtoonHeaderItemList>
			</WebtoonHeaderContainer>
		</WebtoonHeaderRoot>
	);
};
