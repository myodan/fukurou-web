import { Container, type ContainerProps, Flex, HStack } from "@chakra-ui/react";
import type { FC } from "react";
import { getToken } from "~/libs/api/auth";
import { LogoWithLink } from "./logo";
import { UserMenu } from "./user-menu";

type HeaderProps = Readonly<ContainerProps>;

export const Header: FC<HeaderProps> = async ({ children, ...props }) => {
	const token = await getToken();

	return (
		<Flex
			as="header"
			position="sticky"
			top="0"
			zIndex="sticky"
			minHeight="16"
			background="bg.panel"
			borderBottomWidth="1px"
		>
			<Container
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				{...props}
			>
				<LogoWithLink />
				{children}
				<HStack gap="2">
					<UserMenu token={token} />
				</HStack>
			</Container>
		</Flex>
	);
};
