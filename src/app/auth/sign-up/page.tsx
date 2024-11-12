import { Container, Heading, Stack } from "@chakra-ui/react";
import type { FC } from "react";
import { SignUpForm } from "./sign-up-form";

const SignUpPage: FC = () => {
	return (
		<Container maxWidth="md" py={{ base: "12", md: "24" }}>
			<Stack gap="8">
				<Heading size={{ base: "2xl", md: "3xl" }}>가입하기</Heading>
				<SignUpForm />
			</Stack>
		</Container>
	);
};

export default SignUpPage;
