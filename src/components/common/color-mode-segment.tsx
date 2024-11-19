"use client";

import { ClientOnly } from "@chakra-ui/react";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import type { FC } from "react";
import { SegmentedControl } from "../ui/segmented-control";

export const ColorModeSegment: FC = () => {
	const { theme, setTheme } = useTheme();

	return (
		<ClientOnly>
			<SegmentedControl
				size="sm"
				value={theme}
				onValueChange={({ value }) => setTheme(value)}
				items={[
					{
						value: "system",
						label: <MonitorIcon size="1rem" />,
					},
					{
						value: "light",
						label: <SunIcon size="1rem" />,
					},
					{
						value: "dark",
						label: <MoonIcon size="1rem" />,
					},
				]}
			/>
		</ClientOnly>
	);
};
