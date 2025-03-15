'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Experiencie() {
	const [showAll, setShowAll] = useState(false);

	const events = [
		{
			year: '(noviembre 2024 – Febrero 2025)',
			title: 'Nerd - Frontend Developer',
			description:
				'Desarrollé interfaces para e-commerce e inmobiliarias, asegurando su funcionalidad y preparación para el backend. Creé experiencias de usuario fluidas, diseñé plantillas de mailing en HTML/CSS y coordiné con equipos de diseño y QA. Además, gestioné repositorios en Git y GitHub para optimizar el trabajo colaborativo.',
			image: '/nerd.jpg',
			tags: [
				'Html',
				'css',
				'javascript',
				'tailwind css',
				'Siteground',
				'vercel',
				'Git/GitHub',
			],
		},
		{
			year: '(julio 2024 – septiembre 2024)',
			title: 'EDteam - Intership in Frontend Development',
			description:
				'Desarrollé componentes en React y Next.js, usando GitLab, CSSModules y Tailwind CSS. Participé en todo el ciclo de desarrollo, incluyendo features, bugs y refactorización según estándares de Edteam. Además, documenté procesos y realicé pruebas en desarrollo y producción para asegurar calidad y rendimiento.',
			image: '/edteam.jpg',
			tags: [
				'React',
				'Typescript',
				'Next.js',
				'Tailwind CSS',
				'GitLab',
				'Module css',
				'React Query',
				'Zustand',
			],
		},
		{
			year: '(julio 2024 – septiembre 2024)',
			title: 'EDteam - Intership in Frontend Development',
			description:
				'Desarrollé componentes en React y Next.js, usando GitLab, CSSModules y Tailwind CSS. Participé en todo el ciclo de desarrollo, incluyendo features, bugs y refactorización según estándares de Edteam. Además, documenté procesos y realicé pruebas en desarrollo y producción para asegurar calidad y rendimiento.',
			image: '/edteam.jpg',
			tags: [
				'React',
				'Typescript',
				'Next.js',
				'Tailwind CSS',
				'GitLab',
				'Module css',
				'React Query',
				'Zustand',
			],
		},

		// Puedes agregar más experiencias aquí...
	];

	// Mostrar solo los dos primeros eventos si showAll es false
	const visibleEvents = showAll ? events : events.slice(0, 2);

	return (
		<div>
			<div>
				{visibleEvents.map((event, index) => (
					<div key={index} className="py-2.5">
						<div className="text-sm md:text-base flex items-start gap-3">
							<Image
								src={event.image}
								alt={event.title}
								className="object-cover w-[30px] h-[30px] rounded-sm"
								width={30}
								height={30}
							/>
							<div className="flex flex-col">
								<h3 className="text-xs mb-1 text-gray-300">{event.year}</h3>
								<h3 className="font-semibold">{event.title}</h3>
								<p className="text-sm text-gray-300">{event.description}</p>
								{/* Etiquetas */}
								<div className="flex flex-wrap gap-2 mt-2">
									{event.tags.map((tag, i) => (
										<span
											key={i}
											className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Botón para ver más o menos */}
			{events.length > 2 && (
				<button
					onClick={() => setShowAll(!showAll)}
					className="mt-4 text-blue-500 text-center text-sm w-full font-medium underline underline-offset-4 cursor-pointer"
				>
					{showAll ? 'Ver menos' : 'Ver más'}
				</button>
			)}
		</div>
	);
}
