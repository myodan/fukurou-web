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
import { signUp } from "~/libs/api";
import { type SignUpFileds, signUpSchema } from "~/libs/schemas/sign-up-schema";

const SignUpPage: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignUpFileds>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = handleSubmit(async ({ username, password }) => {
		const isOk = await signUp({ username, password });

		if (!isOk) {
			toaster.error({ title: "회원가입 실패" });
			return;
		}

		toaster.success({ title: "회원가입 성공" });
		redirect("/auth/sign-in");
	});

	return (
		<Container marginY="4">
			<Stack as={"form"} gap="4" onSubmit={onSubmit}>
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
				<Field
					label="비밀번호 확인"
					invalid={!!errors.confirmPassword}
					errorText={errors.confirmPassword?.message}
				>
					<PasswordInput {...register("confirmPassword")} />
				</Field>
				<Button type="submit" loading={isSubmitting}>
					회원가입
				</Button>
			</Stack>
		</Container>
	);
};

export default SignUpPage;
