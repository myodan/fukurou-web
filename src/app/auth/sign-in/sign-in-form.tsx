"use client";

import { Input, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { PasswordInput } from "~/components/ui/password-input";
import { toaster } from "~/components/ui/toaster";
import {
	type SignInFormFileds,
	SignInFormSchema,
} from "~/libs/schemas/sign-in-form";

export const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormFileds>({
		resolver: zodResolver(SignInFormSchema),
	});

	const onSubmit: SubmitHandler<SignInFormFileds> = async (data) => {
		toaster.create({
			title: "테스트",
			description: `사용자 이름: ${data.username}, 암호: ${data.password}`,
		});
	};

	return (
		<Stack as={"form"} gap="6" onSubmit={handleSubmit(onSubmit)}>
			<Stack gap="4">
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
			</Stack>
			<Button type="submit">로그인</Button>
		</Stack>
	);
};
