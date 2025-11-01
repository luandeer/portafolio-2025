// import { Banner1 } from '@/common/components/Banner';
import MarioBanner from '@/common/components/BannerOficial';
import { Avatar, AvatarFallback, AvatarImage } from '@/common/components/ui/avatar';

import Biography from '@/modules/home/components/Biography';
import ButtonPortafolio from '@/modules/home/components/ButtonPortafolio';
import { CarouselCertifications } from '@/modules/home/components/Certifications';
import Education from '@/modules/home/components/Education';
import Experiencie from '@/modules/home/components/Experiencie';
import { GitHubContributions } from '@/modules/home/components/github-panel/GithubContributions';
import { BadgeCheck, Download, Luggage } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      {/* <Banner1 /> */}
      <MarioBanner />

      <section className="mx-auto mt-10 mb-10 flex w-full max-w-[740px] flex-col-reverse items-start gap-2 max-lg:px-4 md:flex-row-reverse md:gap-6">
        <div className="w-full flex-1 space-y-1">
          <h1 className="flex items-end gap-2 text-3xl leading-none font-bold text-white md:text-4xl">
            <span className="leading-none">Telmo Alexander</span>
            <span>
              <BadgeCheck />
            </span>
          </h1>

          <p className="mb-4 max-w-[740px] text-sm text-gray-300 md:text-base">
            Software Engineering.
          </p>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="flex items-center gap-1 text-sm text-gray-300 md:text-base">
              <Luggage className="size-4 md:size-5" /> Disponible (pero con café ☕)
            </span>
            {/* <SocialMediaLinks displayMode="desktop" /> */}
            <Link
              href="/cv-alexanderpr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-md border border-gray-600 px-2 py-0.5 text-sm text-gray-400 hover:bg-gray-800"
            >
              <Download className="size-4" /> CV
            </Link>
          </div>
        </div>
        <Avatar className="size-28 border border-gray-700/60 md:size-32">
          <AvatarImage src="/me.png" alt="me" className="object-cover object-top" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </section>

      {/* hola mundo */}

      <section className="mx-auto mb-10 max-w-[740px] text-white max-lg:px-4">
        <h2 className="mb-4 text-lg underline decoration-3 underline-offset-8">¡Hola mundo!</h2>
        <p className="mb-6 text-justify text-gray-300">
          Soy Ingeniero de Software y Full Stack Developer con experiencia en el desarrollo de
          aplicaciones web modernas. Me especializo en crear interfaces intuitivas y sistemas
          escalables que combinan rendimiento, diseño y funcionalidad. Disfruto optimizar procesos,
          escribir código limpio y transformar ideas en productos digitales que generan impacto. 🚀
        </p>

        <Biography />
        <ButtonPortafolio />
      </section>

      {/* bio */}

      {/* contribuciones */}

      <section className="mx-auto mb-10 max-w-[740px] text-white max-lg:px-4">
        <h2 className="mb-4 text-lg underline decoration-3 underline-offset-8">
          Contribuciones en el último año{' '}
        </h2>
        <GitHubContributions />
      </section>
      {/* Certifications*/}
      <section className="mx-auto mb-10 w-full max-w-[740px] overflow-hidden text-white max-lg:px-4">
        <h2 className="mb-6 text-lg underline decoration-3 underline-offset-8">Certificaciones</h2>
        <CarouselCertifications />
      </section>

      {/* hobbies */}
      <section className="mx-auto mb-10 max-w-[740px] text-white max-lg:px-4">
        <h2 className="mb-4 text-lg underline decoration-3 underline-offset-8">Yo ♥</h2>
        <p className="mb-4 text-gray-300">
          La música, el gimnasio, ver anime, películas y series. Además también me gusta seguir
          aprendiendo y evolucionar constantemente.
        </p>
      </section>

      {/* Education */}

      <section className="mx-auto mb-10 max-w-[740px] text-white max-lg:px-4">
        <h2 className="mb-4 text-lg underline decoration-3 underline-offset-8">Experiencia</h2>
        <Experiencie />
      </section>

      {/* Education */}

      <section className="mx-auto mb-6 max-w-[740px] text-white max-lg:px-4 lg:mb-10">
        <h2 className="mb-4 text-lg underline decoration-3 underline-offset-8">Educación</h2>
        <Education />
      </section>
    </main>
  );
}
