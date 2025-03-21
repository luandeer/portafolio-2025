import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/common/components/header/Header';
import Footer from '@/common/components/footer/Footer';
import MarioBanner from '@/common/components/BannerOficial';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Telmo ALexander',
	description: 'Este es mi portafolio como desarrollador de software.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
			>
				<Header />
				<div className="flex flex-col">
					<MarioBanner />
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
