import { Input, Stack } from "@chakra-ui/react";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { PasswordInput } from "~/components/ui/password-input";

export const SignUpForm = () => {
	return (
		<Stack as={"form"} gap="4">
			<Field label="사용자 이름">
				<Input type="text" />
			</Field>
			<Field label="암호">
				<PasswordInput />
			</Field>
			<Button>회원가입</Button>
		</Stack>
	);
};
