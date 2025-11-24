import { Badge } from '@/common/components/shadcn-ui/badge';
import projects from '@/common/data/Proyectos';
import { ArrowLeft, ExternalLink, Github, Globe, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Params {
  handle: string;
}

export default async function ProjectDetail({ params }: { params: Promise<Params> }) {
  const { handle } = await params;
  const project = projects.find((p) => p.handle === handle);

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10 text-white">
      <Link
        href="/proyectos"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e293b] transition-colors group-hover:bg-[#8b5cf6]/20">
          <ArrowLeft className="h-4 w-4" />
        </div>
        <span>Volver</span>
      </Link>
      <div className="mb-8 flex flex-col text-white sm:flex-row sm:items-center sm:gap-4">
        {/* <div className="mb-4 flex  items-start justify-start md:justify-center rounded-xl bg-primary/10 sm:mb-0">
					<Image
						src="/edteam.jpg"
						width={40}
						height={40}
						alt="Inkdrop logo"
						className="h-full w-20 object-cover rounded-xl"
					/>
				</div> */}
        <div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-gray-300">{project.description}</p>
        </div>
      </div>

      {/* Toda la información primero */}
      <div className="mt-8 space-y-3">
        {/* Website */}
        <div className="flex flex-row gap-2 sm:items-center sm:gap-3">
          <div className="flex items-center gap-2 text-white">
            <Globe className="h-5 w-5 shrink-0 text-white" />
            <span className="font-medium">Website:</span>
          </div>
          <div>
            <Link
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white underline underline-offset-4"
            >
              {project.dominio}
              <ExternalLink className="size-4" />
            </Link>
          </div>
        </div>

        {/* GitHub */}
        {project.github && (
          <div className="flex flex-row gap-2 sm:items-center sm:gap-3">
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5 shrink-0 text-white" />
              <span className="font-medium">GitHub:</span>
            </div>
            <div>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                {project.github}
              </Link>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex w-full flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 shrink-0 text-white" />
            <span className="font-medium whitespace-nowrap">Tech Stack:</span>
          </div>
          <div>
            {project.tech.length > 0 && (
              <div className="flex w-full flex-wrap items-center gap-2">
                {project.tech.map((tech, index) => (
                  <Badge
                    key={index}
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-300 backdrop-blur-md"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Imágenes desde el array */}

      <div className="my-16">
        <div className="mb-8 flex items-center gap-3">
          {/* <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div> */}
          <h2 className="text-2xl font-bold">Galería</h2>
          <span className="ml-auto rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-md">
            {project.images.length} imágenes
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {project.images.map((image, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-3xl border border-gray-800 transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <Image
                  src={image || '/placeholder.svg'}
                  alt={`Imagen ${index + 1} del proyecto ${project.title}`}
                  width={1200}
                  height={675}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
