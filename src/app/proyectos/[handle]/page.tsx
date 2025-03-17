import { Badge } from '@/common/components/ui/badge';
import projects from '@/common/data/Proyectos';
import { ArrowLeft, Github, Globe, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Params {
	handle: string;
}

export default async function ProjectDetail({
	params,
}: {
	params: Promise<Params>;
}) {
	const { handle } = await params;
	const project = projects.find((p) => p.handle === handle);

	if (!project) return <div>Proyecto no encontrado</div>;

	return (
		<div className="container mx-auto max-w-4xl text-white py-10 px-4">
			<Link
				href="/proyectos"
				className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 group transition-colors"
			>
				<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1e293b] group-hover:bg-[#8b5cf6]/20 transition-colors">
					<ArrowLeft className="w-4 h-4" />
				</div>
				<span>Volver</span>
			</Link>
			<div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 text-white">
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
					<h1 className="text-3xl font-bold tracking-tight mb-2">
						{project.title}
					</h1>
					<p className="text-gray-300">{project.description}</p>
				</div>
			</div>

			{/* Toda la información primero */}
			<div className="mt-8 space-y-3">
				{/* Website */}
				<div className="flex  gap-2 flex-row sm:items-center sm:gap-3">
					<div className="flex items-center gap-2 text-white">
						<Globe className="h-5 w-5 shrink-0 text-white" />
						<span className="font-medium">Website:</span>
					</div>
					<div>
						<Link
							href="https://fittrack.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:underline"
						>
							fittrack.com
						</Link>
					</div>
				</div>

				{/* GitHub */}
				<div className="flex gap-2 flex-row sm:items-center sm:gap-3">
					<div className="flex items-center gap-2">
						<Github className="h-5 w-5 shrink-0 text-white" />
						<span className="font-medium">GitHub:</span>
					</div>
					<div>
						<Link
							href="https://github.com/inkdrop/repo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:underline"
						>
							Ver 🚀
						</Link>
					</div>
				</div>

				{/* Tech Stack */}
				<div className="flex items-center flex-wrap gap-2 w-full">
					<div className="flex items-center gap-2">
						<Layers className="h-5 w-5 shrink-0 text-white" />
						<span className="font-medium whitespace-nowrap">Tech Stack:</span>
					</div>
					<div>
						{project.tech.length > 0 && (
							<div className="flex items-center flex-wrap w-full gap-2">
								{project.tech.map((tech, index) => (
									<Badge
										key={index}
										className="text-xs px-2 py-1 bg-white/5 backdrop-blur-md rounded-lg text-gray-300 border border-white/10"
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
				<div className="flex items-center gap-3 mb-8">
					{/* <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div> */}
					<h2 className="text-2xl font-bold">Galería</h2>
					<span className="ml-auto text-sm px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-xl text-gray-300 border border-white/10">
						{project.images.length} imágenes
					</span>
				</div>

				<div className="grid grid-cols-1 gap-8">
					{project.images.map((image, index) => (
						<div key={index} className="group ">
							<div className="relative overflow-hidden rounded-3xl border border-gray-800 transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
								<Image
									src={image || '/placeholder.svg'}
									alt={`Imagen ${index + 1} del proyecto ${project.title}`}
									width={1200}
									height={675}
									className="w-full object-cover "
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
