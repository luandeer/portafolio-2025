import { PawPrint } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className=" w-full  sticky  py-4 text-white top-0 bg-[#16191d]/50 backdrop-blur-md z-40 px-4">
			<div className=" max-w-[1000px] mx-auto flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2 group">
					<PawPrint className="-rotate-90 group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
					telmoalexander.
				</Link>
				<nav>
					<ul className="hidden md:flex items-center gap-10 ">
						<li>proyectos</li>
						<li>guestbook</li>
					</ul>
					<button className="block md:hidden"> menú</button>
				</nav>
			</div>
		</header>
	);
};
