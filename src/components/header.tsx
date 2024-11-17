import { Container, Flex, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";
import { getToken, signOut } from "~/libs/api";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { ColorModeButton } from "./ui/color-mode";
import { UserAvatar } from "./user-avatar";

export const Header: FC = async () => {
	const isSignedIn = !!(await getToken());

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
				gap="4"
			>
				<Logo />
				<HStack as="nav" gap="4" flexGrow="1">
					<NextLink href="/webtoons" scroll={false} passHref>
						<Button variant="ghost">웹툰</Button>
					</NextLink>
				</HStack>
				<HStack>
					{isSignedIn ? (
						<>
							<UserAvatar />
							<Button onClick={signOut} variant="outline">
								로그아웃
							</Button>
						</>
					) : (
						<>
							<NextLink href="/auth/sign-in" passHref>
								<Button variant="outline">로그인</Button>
							</NextLink>
							<NextLink href="/auth/sign-up" passHref>
								<Button>가입하기</Button>
							</NextLink>
						</>
					)}
					<ColorModeButton />
				</HStack>
			</Container>
		</Flex>
	);
};
