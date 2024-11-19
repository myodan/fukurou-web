"use client";

import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";
import { type Payload, signOut } from "~/libs/api/auth";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import {
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
} from "../ui/popover";

type UserMenuProps = Readonly<{
	token?: Payload;
}>;

export const UserMenu: FC<UserMenuProps> = ({ token }) => {
	return token ? (
		<>
			<PopoverRoot>
				<PopoverTrigger>
					<Avatar
						src={token.avatarUrl}
						shape="rounded"
						cursor="pointer"
						variant="outline"
					/>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverBody padding="2">
						<HStack justifyContent="space-between">
							<Avatar src={token.avatarUrl} shape="rounded" variant="outline" />
							<Stack gap="0" flexGrow="1">
								<Text fontWeight="bold">{token.username}</Text>
								<Text color="fg.muted">{token.role}</Text>
							</Stack>
							<Button
								variant="outline"
								size="xs"
								onClick={async () => await signOut()}
							>
								로그아웃
							</Button>
						</HStack>
					</PopoverBody>
				</PopoverContent>
			</PopoverRoot>
		</>
	) : (
		<>
			<Link asChild>
				<NextLink href="/auth/sign-in">로그인</NextLink>
			</Link>
			<Link asChild>
				<NextLink href="/auth/sign-up">회원가입</NextLink>
			</Link>
		</>
	);
};
