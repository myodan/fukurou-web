import type { Metadata } from "next";
import localFont from "next/font/local";
import type { FC, ReactNode } from "react";
import { Provider } from "~/components/ui/provider";
import { Header } from "./header";

const pretendard = localFont({
	src: "./fonts/PretendardVariable.woff2",
	variable: "--font-pretendard",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Fukurou",
};

type Props = Readonly<{
	children: ReactNode;
}>;

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body className={pretendard.className}>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
