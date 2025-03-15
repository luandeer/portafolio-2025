import projects from '@/common/data/Proyectos';
import Image from 'next/image';

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
		<div>
			<h1>{project.title}</h1>
			<p>{project.description}</p>
			<Image
				src={project.images[0]}
				alt={project.title}
				width={400}
				height={400}
			/>
			<a href={project.website} target="_blank" rel="noopener noreferrer">
				Ver sitio web
			</a>
		</div>
	);
}
