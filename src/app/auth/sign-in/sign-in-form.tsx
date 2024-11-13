"use client";

import { Input, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { PasswordInput } from "~/components/ui/password-input";
import { toaster } from "~/components/ui/toaster";
import { signIn } from "~/libs/api";
import { type SignInFileds, signInSchema } from "~/libs/schemas/sign-in-schema";

export const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignInFileds>({
		resolver: zodResolver(signInSchema),
	});

	const onSubmit: SubmitHandler<SignInFileds> = async (data) => {
		let error = false;
		await signIn(data)
			.then(() => {
				toaster.success({ title: "로그인 성공" });
			})
			.catch(() => {
				error = true;
				toaster.error({ title: "로그인 실패" });
			});

		if (!error) {
			redirect("/");
		}
	};

	return (
		<Stack as={"form"} gap="4" onSubmit={handleSubmit(onSubmit)}>
			<Field
				label="사용자 이름"
				invalid={!!errors.username}
				errorText={errors.username?.message}
			>
				<Input {...register("username")} type="text" />
			</Field>
			<Field
				label="암호"
				invalid={!!errors.password}
				errorText={errors.password?.message}
			>
				<PasswordInput {...register("password")} />
			</Field>
			<Button type="submit" loading={isSubmitting}>
				로그인
			</Button>
		</Stack>
	);
};
