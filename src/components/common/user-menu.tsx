"use client";

import { HStack, Stack, Text } from "@chakra-ui/react";
import { type FC, useState } from "react";
import { type Payload, signOut } from "~/libs/api/auth";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { LinkButton } from "../ui/link-button";
import {
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
} from "../ui/popover";
import { ColorModeSegment } from "./color-mode-segment";

type UserMenuProps = Readonly<{
	token?: Payload;
}>;

export const UserMenu: FC<UserMenuProps> = ({ token }) => {
	const [open, setOpen] = useState(false);

	return token ? (
		<PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
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
				<PopoverBody padding="3">
					<Stack gap="4">
						<HStack justifyContent="space-between">
							<Avatar src={token.avatarUrl} shape="rounded" variant="outline" />
							<Stack gap="0" flexGrow="1">
								<Text fontWeight="bold">{token.username}</Text>
								<Text color="fg.muted">{token.role}</Text>
							</Stack>
							<Button
								variant="outline"
								size="xs"
								onClick={async () => {
									setOpen(false);
									await signOut();
								}}
							>
								로그아웃
							</Button>
						</HStack>
						<HStack justifyContent="space-between">
							<Text paddingX="2" paddingY="1">
								테마
							</Text>
							<ColorModeSegment />
						</HStack>
						<Stack>
							<LinkButton
								href="/account/settings"
								size="xs"
								variant="outline"
								onClick={() => setOpen(false)}
							>
								계정 설정
							</LinkButton>
						</Stack>
					</Stack>
				</PopoverBody>
			</PopoverContent>
		</PopoverRoot>
	) : (
		<>
			<LinkButton href="/auth/sign-in" variant="outline">
				로그인
			</LinkButton>
			<LinkButton href="/auth/sign-up" variant="outline">
				회원가입
			</LinkButton>
		</>
	);
};
