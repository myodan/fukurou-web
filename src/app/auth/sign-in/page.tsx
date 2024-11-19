"use client";

import { Container, Input, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { PasswordInput } from "~/components/ui/password-input";
import { toaster } from "~/components/ui/toaster";
import { signIn } from "~/libs/api";
import { type SignInFileds, signInSchema } from "~/libs/schemas/sign-in-schema";

const SignInPage: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignInFileds>({
		resolver: zodResolver(signInSchema),
	});

	const onSubmit = handleSubmit(async ({ username, password }) => {
		const isOk = await signIn({ username, password });

		if (!isOk) {
			toaster.error({ title: "로그인 실패" });
			return;
		}

		toaster.success({ title: "로그인 성공" });
		redirect("/");
	});

	return (
		<Container display="flex" flexDirection="column" marginY="4">
			<Stack as={"form"} onSubmit={onSubmit} gap="4">
				<Field
					label="사용자 이름"
					invalid={!!errors.username}
					errorText={errors.username?.message}
				>
					<Input {...register("username")} type="text" />
				</Field>
				<Field
					label="비밀번호"
					invalid={!!errors.password}
					errorText={errors.password?.message}
				>
					<PasswordInput {...register("password")} />
				</Field>
				<Button type="submit" loading={isSubmitting}>
					로그인
				</Button>
			</Stack>
		</Container>
	);
};

export default SignInPage;
