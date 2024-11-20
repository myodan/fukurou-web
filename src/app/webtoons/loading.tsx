import { Container } from "@chakra-ui/react";
import { WebtoonHeader } from "~/components/webtoons/header";

const Loading = () => {
	return (
		<>
			<WebtoonHeader />
			<Container paddingY="4">Loading...</Container>
		</>
	);
};

export default Loading;
