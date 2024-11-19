"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export type Payload = {
	sub: number;
	iat: number;
	exp: number;
	username: string;
	avatarUrl?: string;
	role: string;
};

export type Credentials = {
	username: string;
	password: string;
};

export type User = {
	id: number;
	username: string;
	password: string;
	role: string;
	avatarUrl?: string;
	createdAt: string;
	updatedAt: string;
};

export const signIn = async (credentials: Credentials) => {
	const cookieStore = await cookies();

	const response = await fetch(
		`${process.env.FUKUROU_API_BASE_URL}/auth/sign-in`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		},
	);

	if (!response.ok) {
		throw new Error("Invalid credentials");
	}

	const { accessToken }: { accessToken: string } = await response.json();
	const decodedToken = jwtDecode<Payload>(accessToken);

	cookieStore.set({
		name: "access-token",
		value: accessToken,
		httpOnly: true,
		secure: true,
		sameSite: "strict",
		expires: decodedToken.exp * 1000,
	});
};

export const signOut = async () => {
	const cookieStore = await cookies();

	cookieStore.delete("access-token");
};

export async function getToken() {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get("access-token")?.value;

	if (!accessToken) {
		return;
	}

	const decodedToken = jwtDecode<Payload>(accessToken);

	return decodedToken;
}

export const getProfile = async () => {
	const cookieStore = await cookies();

	const response = await fetch(
		`${process.env.FUKUROU_API_BASE_URL}/auth/profile`,
		{
			headers: {
				cookie: cookieStore
					.getAll()
					.map((cookie) => `${cookie.name}=${cookie.value}`)
					.join("; "),
			},
		},
	);

	if (!response.ok) {
		return null;
	}

	const data: User = await response.json();

	return data;
};
