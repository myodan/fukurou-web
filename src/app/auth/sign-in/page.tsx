import { Container } from "@chakra-ui/react";
import type { FC } from "react";
import { SignInForm } from "./sign-in-form";

const SignInPage: FC = () => {
	return (
		<Container marginY="4">
			<SignInForm />
		</Container>
	);
};

export default SignInPage;
