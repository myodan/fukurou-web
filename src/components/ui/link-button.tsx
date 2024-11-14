"use client";

import type { HTMLChakraProps, RecipeProps } from "@chakra-ui/react";
import { createRecipeContext } from "@chakra-ui/react";
import NextLink from "next/link";

export interface LinkButtonProps
	extends HTMLChakraProps<"a", RecipeProps<"button">> {}

const { withContext } = createRecipeContext({ key: "button" });

export const LinkButton = withContext<HTMLAnchorElement, LinkButtonProps>(
	NextLink,
);
