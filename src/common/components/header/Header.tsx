'use client';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { NavLinks } from './Nav';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el modal
  const closeModal = () => setIsOpen(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/40 px-4 py-4 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-[740px] items-center justify-between">
        <Link href="/">@alexanderpreg</Link>
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden md:block">
            <NavLinks />
          </nav>
          {/* <SocialMediaLinks displayMode="desktop" /> */}
          <Link
            href="/cv-alexanderpr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-md border border-gray-600 bg-gradient-to-b from-gray-500/20 to-gray-500/10 px-2 py-0.5 text-sm text-gray-400 hover:bg-slate-900"
          >
            <Download className="size-4" /> CV
          </Link>
          <div className="block md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button className="cursor-pointer bg-transparent p-0 text-white hover:bg-transparent">
                  Menú
                </Button>
              </SheetTrigger>
              <SheetContent className="border-gray-700">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-white">
                    {' '}
                    @alexanderpreg
                  </SheetTitle>
                  <SheetDescription className="text-white">
                    {
                      'La ingeniería de software es el arte de hacer que lo imposible parezca sencillo.'
                    }
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 px-4 py-4">
                  <Link
                    href="/proyectos"
                    className="text-white underline underline-offset-8"
                    onClick={closeModal}
                  >
                    {' '}
                    Ver proyectos
                  </Link>
                </div>
                <SheetFooter>
                  <div className="text-gray-300">
                    &copy;{' '}
                    <span className="text-sm">{`${new Date().getFullYear()}`} telmoalexander.</span>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
