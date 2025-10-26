// import { Banner1 } from '@/common/components/Banner';
import MarioBanner from '@/common/components/BannerOficial';
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
import { GitHubContributions } from '@/modules/home/components/github-panel/GithubContributions';
import { BadgeCheck, Download, Luggage } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
	return (
		<main className=" max-lg:px-4">
			{/* <Banner1 /> */}
			<MarioBanner />

			<section className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse items-start w-full mt-10 max-w-[740px] mx-auto mb-10">
				<div className="flex-1 space-y-1 w-full">
					<h1 className="font-bold text-3xl md:text-4xl text-white  leading-none flex items-end gap-2">
						<span className="leading-none">Telmo Alexander</span>
						<span>
							<BadgeCheck />
						</span>
					</h1>

					<p className="max-w-[740px] text-sm md:text-base text-gray-300 mb-4">
						Software Engineering.
					</p>
					<div className="flex flex-wrap items-center gap-2 md:gap-3">
						<span className="flex items-center gap-1 text-sm md:text-base text-gray-300">
							<Luggage className="size-4 md:size-5" /> Disponible (pero con café
							☕)
						</span>
						{/* <SocialMediaLinks displayMode="desktop" /> */}
						<Link
							href="/cv-alexanderpr.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm hover:bg-gray-800  text-gray-400 rounded-md border border-gray-600 px-2 py-0.5"
						>
							<Download className="size-4" /> CV
						</Link>
					</div>
				</div>
				<Avatar className="size-28 md:size-32 border border-gray-700/60">
					<AvatarImage
						src="/me.png"
						alt="me"
						className="object-cover object-top"
					/>
					<AvatarFallback></AvatarFallback>
				</Avatar>
			</section>

			{/* hola mundo */}

			<section className="max-w-[740px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					¡Hola mundo!
				</h2>
				<p className="text-gray-300 mb-6 text-justify">
					Soy Ingeniero de Software y Full Stack Developer con experiencia en el
					desarrollo de aplicaciones web modernas. Me especializo en crear
					interfaces intuitivas y sistemas escalables que combinan rendimiento,
					diseño y funcionalidad. Disfruto optimizar procesos, escribir código
					limpio y transformar ideas en productos digitales que generan impacto.
					🚀
				</p>

				<Biography />
				<ButtonPortafolio />
			</section>

			{/* bio */}

			{/* contribuciones */}

			<section className="max-w-[740px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					Contribuciones en el último año{' '}
				</h2>
				<GitHubContributions />
			</section>
			{/* Certifications*/}
			<section className="max-w-[740px] mx-auto text-white mb-10 w-full overflow-hidden">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-6">
					Certificaciones
				</h2>
				<CarouselCertifications />
			</section>

			{/* hobbies */}
			<section className="max-w-[740px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					Yo ♥
				</h2>
				<p className="text-gray-300 mb-4">
					La música, el gimnasio, ver anime, películas y series. Además también
					me gusta seguir aprendiendo y evolucionar constantemente.
				</p>
			</section>

			{/* Education */}

			<section className="max-w-[740px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					Experiencia
				</h2>
				<Experiencie />
			</section>

			{/* Education */}

			<section className="max-w-[740px] mx-auto text-white mb-10">
				<h2 className="text-lg underline decoration-3 underline-offset-8 mb-4">
					Educación
				</h2>
				<Education />
			</section>
		</main>
	);
}
