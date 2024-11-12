import { Container } from "@chakra-ui/react";
import { TriangleAlert } from "lucide-react";
import type { FC } from "react";
import { EmptyState } from "~/components/ui/empty-state";

const NotFoundPage: FC = () => {
	return (
		<Container>
			<EmptyState
				icon={<TriangleAlert />}
				title="요청하신 페이지를 찾을 수 없습니다."
				description="입력한 주소가 올바른지 다시 한 번 확인해 주세요."
			/>
		</Container>
	);
};

export default NotFoundPage;
