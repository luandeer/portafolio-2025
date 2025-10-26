import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/common/components/header/Header';
import Footer from '@/common/components/footer/Footer';
import { TooltipProvider } from '@/common/components/ui/tooltip';

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
		<html lang="es">
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
			>
				<Header />

				<TooltipProvider delayDuration={0}>{children}</TooltipProvider>

				<Footer />
			</body>
		</html>
	);
}
