import projects from '@/common/data/Proyectos';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectList() {
	return (
		<section className="container mx-auto max-w-3xl py-10 text-white px-4">
			<Link
				href="/"
				className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 group transition-colors"
			>
				<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1e293b] group-hover:bg-[#8b5cf6]/20 transition-colors">
					<ArrowLeft className="w-4 h-4" />
				</div>
				<span>Volver</span>
			</Link>
			<div className="flex  items-center justify-between mb-8">
				<h2 className="text-2xl font-semibold  ">Mis Proyectos</h2>
				<span className="ml-auto text-sm px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-xl text-gray-300 border border-white/10">
					{projects.length}
				</span>
				{/* <span className="text-sm">Todos los proyectos</span> */}
			</div>
			<div className="grid md:grid-cols-2 gap-6">
				{projects.map((project) => (
					<div key={project.title} className="group">
						<Link href={`/proyectos/${project.handle}`} className="block">
							<div
								className="relative overflow-hidden rounded-lg mb-4 transition-all duration-500 
						group-hover:shadow-xl
						 "
							>
								{/* Barra de navegador minimalista */}
								<div className="bg-gray-950 px-3 py-1.5 flex items-center">
									<div className="flex space-x-1.5">
										<div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
										<div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
										<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
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
										className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] will-change-transform"
									/>
									{/* Overlay al hacer hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									{/* Indicador minimalista */}
									<div
										className="absolute inset-0 transition-all duration-500
                      flex items-center flex-col justify-center opacity-0 group-hover:opacity-100"
									>
										{/* Círculo con icono */}
										<div
											className="w-12 h-12 rounded-full bg-black/30 
                        flex items-center justify-center border border-white/10
                        transform scale-75 group-hover:scale-100 transition-all duration-500"
										>
											<BookOpen className="w-5 h-5 text-white" />
										</div>
										Ver detalle
									</div>
								</div>
							</div>

							{/* Información del proyecto - Estilo minimalista */}
							<h3 className="text-lg font-medium mb-1 text-[#e2e8f0] transition-colors duration-300 group-hover:text-gray-300">
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
