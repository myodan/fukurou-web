import { Container, Heading, Stack } from "@chakra-ui/react";
import type { FC } from "react";
import { SignInForm } from "./sign-in-form";

const SignInPage: FC = () => {
	return (
		<Container maxWidth="md" py={{ base: "12", md: "24" }}>
			<Stack gap="8">
				<Heading size={{ base: "2xl", md: "3xl" }}>로그인</Heading>
				<SignInForm />
			</Stack>
		</Container>
	);
};

export default SignInPage;
