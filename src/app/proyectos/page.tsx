import projects from '@/common/data/Proyectos';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectList() {
  return (
    <section className="container mx-auto max-w-3xl px-4 py-10 text-white">
      <Link
        href="/"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e293b] transition-colors group-hover:bg-[#8b5cf6]/20">
          <ArrowLeft className="h-4 w-4" />
        </div>
        <span>Volver</span>
      </Link>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Mis Proyectos</h2>
        <span className="ml-auto rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-md">
          {projects.length}
        </span>
        {/* <span className="text-sm">Todos los proyectos</span> */}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <Link href={`/proyectos/${project.handle}`} className="block">
              <div className="relative mb-4 overflow-hidden rounded-lg transition-all duration-500 group-hover:shadow-xl">
                {/* Barra de navegador minimalista */}
                <div className="flex items-center bg-gray-950 px-3 py-1.5">
                  <div className="flex space-x-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  </div>
                  {/* <div className="ml-3 text-xs text-gray-50 truncate">
										{project.title}.app
									</div> */}
                </div>

                {/* Imagen del proyecto */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.images[0] || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                  />
                  {/* Overlay al hacer hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  {/* Indicador minimalista */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {/* Círculo con icono */}
                    <div className="flex h-12 w-12 scale-75 transform items-center justify-center rounded-full border border-white/10 bg-black/30 transition-all duration-500 group-hover:scale-100">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    Ver detalle
                  </div>
                </div>
              </div>

              {/* Información del proyecto - Estilo minimalista */}
              <h3 className="mb-1 text-lg font-medium text-[#e2e8f0] transition-colors duration-300 group-hover:text-gray-300">
                {project.title}
              </h3>
              {/* <p className="text-sm text-gray-400">{project.description}</p> */}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
