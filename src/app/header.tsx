import { Container, Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";
import { Logo } from "~/components/logo";
import { ColorModeButton } from "~/components/ui/color-mode";

export const Header: FC = () => {
	return (
		<Flex
			height="16"
			bg="bg.panel"
			position="sticky"
			zIndex="sticky"
			top="0"
			borderBottomWidth="1px"
		>
			<Container
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				gap="8"
			>
				<Logo />
				<HStack as="nav" gap="4" flexGrow="1">
					<Link asChild>
						<NextLink href="/">메인</NextLink>
					</Link>
					<Link asChild>
						<NextLink href="/webtoons">웹툰</NextLink>
					</Link>
				</HStack>
				<ColorModeButton />
			</Container>
		</Flex>
	);
};
