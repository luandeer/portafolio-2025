import { Container } from '@/common/components/customer-ui/Container';
import { Heading } from '@/common/components/customer-ui/Heading';
import { Text } from '@/common/components/customer-ui/Text';
import { Avatar, AvatarFallback, AvatarImage } from '@/common/components/shadcn-ui/avatar';
import { TechStacksList } from '@/common/data/stack';
import { VerifiedIcon } from '@/common/icons/VerifyIcon';
import { CarouselCertifications } from '@/modules/home/components/certification/Certifications';
import Education from '@/modules/home/components/Education';
import Experiencie from '@/modules/home/components/Experiencie';
import { GitHubContributions } from '@/modules/home/components/github-panel/GithubContributions';
import { SocialLinkCard } from '@/modules/home/components/SocialLinkCard';
import { socialProfiles } from '@/modules/home/constants/social';
import Image from 'next/image';
import ButtonPortafolio from './components/ButtonPortafolio';

export function HomeView() {
  return (
    <Container as="main" size="full" className="space-y-10">
      {/* <MarioBanner /> */}
      <Container
        as="section"
        size="container"
        className="mt-10 flex w-full flex-col-reverse gap-2 md:flex-row-reverse md:items-center md:gap-6"
      >
        <div className="w-full space-y-1">
          <Heading as="h1" variant="title" className="flex items-end gap-2">
            <span className="leading-none">Telmo Alexander</span>
            <VerifiedIcon className="text-blue-500" />
          </Heading>
          <Heading as="h3" variant="subtitle">
            Software Engineer
          </Heading>
        </div>
        <Avatar className="size-28 border border-gray-700/60 md:size-32">
          <AvatarImage src="/me3.png" alt="me" className="object-cover object-top" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </Container>

      <Container as="div" size="container" className="space-y-2.5 text-white">
        <div className="flex w-full flex-wrap items-center gap-4">
          {socialProfiles.map((profile) => (
            <SocialLinkCard
              key={profile.id}
              id={profile.id}
              name={profile.name}
              handle={profile.handle}
              icon={profile.icon}
              url={profile.url}
            />
          ))}
        </div>
        <Heading as="h3" variant="subtitle" className="text-sm!">
          O envíeme un correo electrónico a
          <span className="ml-1 text-blue-400">alexanderperezreginaldo@gmail.com</span>
        </Heading>
      </Container>

      <Container as="section" size="container" className="text-white">
        <Heading as="h2" variant="heading" className="mb-3">
          Hola Mundo!
        </Heading>
        <Text className="mb-6 text-justify">
          Soy Ingeniero de Software y Full Stack Developer con experiencia en el desarrollo de
          aplicaciones web modernas. Me especializo en crear interfaces intuitivas y sistemas
          escalables que combinan rendimiento, diseño y funcionalidad. Disfruto optimizar procesos,
          escribir código limpio y transformar ideas en productos digitales que generan impacto. 🚀
        </Text>
        <ButtonPortafolio />
      </Container>
      <Container as="div" size="container">
        <Heading as="h2" variant="heading" className="mb-3">
          Lo que uso para crear
        </Heading>
        <div className="flex flex-wrap items-center">
          {TechStacksList.map(({ name, icon }) => {
            return (
              <div
                key={name}
                className="flex items-center gap-2 border-r border-b border-neutral-800 p-2"
              >
                <Image
                  src={icon}
                  alt={name}
                  width={20}
                  height={20}
                  title={name}
                  className="aspect-square size-4"
                />
                <p className="text-center text-sm font-semibold text-gray-300">{name}</p>
              </div>
            );
          })}
        </div>
      </Container>
      {/* contribuciones */}
      <Container as="section" size="container" className="text-white">
        <Heading as="h2" variant="heading" className="mb-4">
          Contribuciones GitHub
        </Heading>
        <GitHubContributions />
      </Container>
      {/* hobbies */}
      <Container as="section" size="container" className="text-white">
        <Heading as="h2" variant="heading" className="mb-3">
          Yo ♥
        </Heading>
        <Text className="text-justify">
          La música, el gimnasio, ver anime, películas y series. Además también me gusta seguir
          aprendiendo y evolucionar constantemente.
        </Text>
      </Container>
      {/* Education */}
      <Container as="section" size="container" className="text-white">
        <Heading as="h2" variant="heading" className="mb-3">
          Experiencia
        </Heading>
        <Experiencie />
      </Container>
      {/* Education */}
      <Container as="section" size="container" className="text-white">
        <Heading as="h2" variant="heading" className="mb-3">
          Educación
        </Heading>
        <Education />
      </Container>
      {/* Certifications*/}
      <Container as="section" size="container" className="overflow-hidden text-white max-lg:px-4">
        <Heading as="h2" variant="heading" className="mb-4">
          Certificaciones
        </Heading>
        <CarouselCertifications />
      </Container>
    </Container>
  );
}
