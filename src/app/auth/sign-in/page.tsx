import { Container } from "@chakra-ui/react";
import type { FC } from "react";
import { SignInForm } from "./sign-in-form";

const SignInPage: FC = () => {
	return (
		<Container my="4">
			<SignInForm />
		</Container>
	);
};

export default SignInPage;
