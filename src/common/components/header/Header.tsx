'use client';
import { FolderCode, PawPrint } from 'lucide-react';
import Link from 'next/link';
import { NavLinks } from './Nav';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { useState } from 'react';
import SocialMediaLinks from '@/modules/home/components/Social';
export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Función para cerrar el modal
	const closeModal = () => setIsOpen(false);
	return (
		<header className=" w-full  sticky  py-4 text-white top-0 bg-black backdrop-blur-md z-40 px-4">
			<div className=" max-w-[740px] mx-auto flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2 group">
					<PawPrint className="-rotate-90 group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
					alexanderpreg.
				</Link>
				<div className="flex items-center gap-2">
					<nav className="hidden md:block">
						<NavLinks />
					</nav>
					<SocialMediaLinks displayMode="desktop" />
				</div>
				<div className="block md:hidden">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button className="bg-transparent text-white p-0 hover:bg-transparent cursor-pointer">
								Menú
							</Button>
						</SheetTrigger>
						<SheetContent className="border-gray-700">
							<SheetHeader>
								<SheetTitle className="text-white flex items-center gap-2 ">
									{' '}
									<PawPrint className="-rotate-90 " />
									telmoalexander.
								</SheetTitle>
								<SheetDescription className="text-white">
									{
										'La ingeniería de software es el arte de hacer que lo imposible parezca sencillo.'
									}
								</SheetDescription>
							</SheetHeader>
							<div className="grid gap-4 py-4 px-4">
								<Link
									href="/proyectos"
									className="text-white flex items-center gap-2 underline underline-offset-8"
									onClick={closeModal}
								>
									{' '}
									Ver proyectos <FolderCode />
								</Link>
							</div>
							<SheetFooter>
								<div className="text-gray-300">
									&copy;{' '}
									<span className="text-sm ">
										{`${new Date().getFullYear()}`} telmoalexander.
									</span>
								</div>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};
