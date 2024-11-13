import { Container } from "@chakra-ui/react";
import type { FC } from "react";
import { SignUpForm } from "./sign-up-form";

const SignUpPage: FC = () => {
	return (
		<Container>
			<SignUpForm />
		</Container>
	);
};

export default SignUpPage;
