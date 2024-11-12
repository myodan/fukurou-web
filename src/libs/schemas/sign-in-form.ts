import { z } from "zod";

export const SignInFormSchema = z.object({
	username: z
		.string()
		.min(6, "사용자 이름은 최소 6자 이상이어야 합니다.")
		.max(32, "사용자 이름은 최대 32자까지 가능합니다.")
		.regex(/^[a-z0-9]+$/, "사용자 이름은 소문자와 숫자만 포함할 수 있습니다."),
	password: z
		.string()
		.min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
		.max(64, "비밀번호는 최대 64자까지 가능합니다.")
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/,
			"비밀번호는 대소문자, 숫자, 특수문자를 포함해야 합니다.",
		),
});

export type SignInFormFileds = z.infer<typeof SignInFormSchema>;
