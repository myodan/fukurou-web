import { getToken } from "~/libs/api";
import { Avatar } from "./ui/avatar";

export async function UserAvatar() {
	const token = await getToken();

	if (!token) {
		throw Error("User is not signed in");
	}

	return (
		<Avatar
			name={token.username}
			shape="rounded"
			src={token.avatarUrl || undefined}
		/>
	);
}
