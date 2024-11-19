import { Container } from "@chakra-ui/react";
import type { FC } from "react";
import { SignUpForm } from "./sign-up-form";

const SignUpPage: FC = () => {
	return (
		<Container marginY="4">
			<SignUpForm />
		</Container>
	);
};

export default SignUpPage;
