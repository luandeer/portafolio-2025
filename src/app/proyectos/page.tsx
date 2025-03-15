import projects from '@/common/data/Proyectos';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectList() {
	return (
		<section className="container mx-auto max-w-4xl py-10 text-white">
			<h2 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
			<div className="grid md:grid-cols-2 gap-6">
				{projects.map((project) => (
					<div
						key={project.handle}
						className="bg-surface-2 p-5 rounded-lg shadow-lg"
					>
						<Image
							src={project.images[0]}
							alt={project.title}
							width={200}
							height={200}
							className="w-full h-48 object-cover rounded-md"
						/>
						<h3 className="text-xl font-semibold mt-3">{project.title}</h3>
						<p className="text-text-2 text-sm mt-2">{project.description}</p>
						<div className="flex items-center justify-between mt-4">
							<a
								href={project.website}
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline"
							>
								🌐 Ver Proyecto
							</a>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-500 hover:text-gray-700"
							>
								🐙 GitHub
							</a>
						</div>
						<Link
							href={`/proyectos/${project.handle}`}
							className="block mt-3 text-center text-white bg-primary py-2 rounded-md hover:bg-primary/80"
						>
							🔍 Ver Detalles
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
