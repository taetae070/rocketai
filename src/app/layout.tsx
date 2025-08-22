import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "프론트엔드 반응형 코딩테스트",
	description: "반응형 웹 개발 프로젝트",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>
				<div className="min-h-screen bg-gray-100">
					<main className="container mx-auto max-w-md px-4">{children}</main>
				</div>
			</body>
		</html>
	);
}
