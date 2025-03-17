// import { Banner1 } from '@/common/components/Banner';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/common/components/ui/avatar';
import Biography from '@/modules/home/components/Biografía';
import ButtonPortafolio from '@/modules/home/components/ButtonPortafolio';
import { CarouselCertifications } from '@/modules/home/components/Certifications';
import Education from '@/modules/home/components/Education';
import Experiencie from '@/modules/home/components/Experiencie';
import SocialMediaLinks from '@/modules/home/components/Social';
import { BadgeCheck, Download, Luggage } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
	return (
		<main className=" max-lg:px-4">
			{/* <Banner1 /> */}

			<div className="flex flex-col-reverse gap-2 md:gap-0 md:flex-row items-start justify-between w-full mt-10 max-w-[700px] mx-auto mb-10">
				<div className="flex-1 space-y-1 w-full">
					<h1 className="font-bold text-3xl md:text-4xl text-white  leading-none flex items-end gap-2">
						<span className="leading-none">Telmo Alexander</span>
						<span>
							<BadgeCheck />
						</span>
					</h1>

					<p className="max-w-[700px] text-sm md:text-base text-gray-300 mb-4">
						Frontend Developer. Software Engineering.
					</p>
					<div className="flex flex-wrap items-center gap-2 md:gap-4">
						<span className="flex items-center gap-1 text-sm md:text-base text-gray-300">
							<Luggage className="size-4 md:size-5" /> Disponible (pero con café
							☕)
						</span>
						<SocialMediaLinks displayMode="mobile" />
						<Link
							href="/cv-alexanderpr.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm md:text-base text-gray-300"
						>
							<Download className="size-4 md:size-5" /> Descargar cv
						</Link>
					</div>
				</div>
				<Avatar className="size-28 md:size-32 border border-white">
					<AvatarImage src="/me.jpg" alt="@shadcn" />
					<AvatarFallback></AvatarFallback>
				</Avatar>
			</div>

			{/* hola mundo */}

			<div className="max-w-[700px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					¡Hola mundo!
				</h2>
				<p className="text-gray-300 mb-6">
					Soy un desarrollador frontend e ingeniero de software enfocado en
					crear experiencias digitales excepcionales. Me apasiona transformar
					ideas en productos funcionales, optimizando cada detalle para ofrecer
					la mejor experiencia de usuario. Siempre perfeccionando mis
					habilidades y adoptando nuevas tecnologías para entregar soluciones de
					software más robustas e innovadoras. 🚀
				</p>

				<ButtonPortafolio />
			</div>

			{/* bio */}

			<div className="max-w-[700px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					Bio
				</h2>
				<Biography />
			</div>
			{/* hobbies */}
			<div className="max-w-[700px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					Yo ♥
				</h2>
				<p className="text-gray-300 mb-4">
					La música, el gimnasio, ver anime, películas y series, además de
					aprender siempre cosas nuevas que me ayuden a mejorar mis skills.
				</p>
			</div>

			{/* Education */}

			<div className="max-w-[700px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					Experiencia
				</h2>
				<Experiencie />
			</div>

			{/* Education */}

			<div className="max-w-[700px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					Educación
				</h2>
				<Education />
			</div>

			{/* Certifications*/}
			<div className="max-w-[700px] mx-auto text-white mb-10 w-full overflow-hidden">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-6">
					Certificaciones
				</h2>
				<CarouselCertifications />
			</div>
		</main>
	);
}
