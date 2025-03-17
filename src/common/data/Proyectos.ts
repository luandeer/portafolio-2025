type Project = {
	handle: string;
	title: string;
	description: string;
	tech: string[];
	website: string;
	github: string;
	images: string[];
	video?: string;
	dominio?: string;
};

const projects: Project[] = [
	{
		handle: 'sonqu-recetas',
		title: 'Sonqu - Recetas Peruanas',
		description:
			'Plataforma donde los usuarios pueden explorar recetas peruanas, guardarlas y compartirlas. Incluye filtros avanzados y videos cortos.',
		tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Cloudinary'],
		website: 'https://sonqu.com',
		github: 'https://github.com/usuario/sonqu',
		images: [
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
		],
		video: '/projects/sonqu-demo.mp4',
	},

	{
		handle: 'fittrack-dashboard',
		title: 'FitTrack - Dashboard de Rutinas',
		description:
			'Aplicación web que permite a los usuarios registrar su progreso en el gimnasio, generar rutinas personalizadas y visualizar estadísticas.',
		tech: ['React', 'TypeScript', 'Firebase', 'Recharts'],
		website: 'https://fittrack.com',
		github: 'https://github.com/usuario/fittrack',
		images: [
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
		],
		video: '/projects/fittrack-demo.mp4',
	},

	{
		handle: 'eshop-tienda-online',
		title: 'E-Shop - Tienda Online',
		description:
			'E-commerce con pasarela de pagos, autenticación de usuarios y administración de productos desde un dashboard.',
		tech: ['Next.js', 'Stripe', 'ShadCN UI', 'MongoDB'],
		website: 'https://eshop.com',
		github: 'https://github.com/usuario/eshop',
		images: [
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
		],
		video: '/projects/eshop-demo.mp4',
	},

	{
		handle: 'moviex-catalogo',
		title: 'MovieX - Catálogo de Películas',
		description:
			'App para explorar películas y series con detalles, calificaciones y recomendaciones, usando la API de TMDB.',
		tech: ['React', 'Vite', 'Zustand', 'TMDB API'],
		website: 'https://moviex.com',
		github: 'https://github.com/usuario/moviex',
		images: [
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
		],
		video: '/projects/moviex-demo.mp4',
	},

	{
		handle: 'devhub-comunidad',
		title: 'DevHub - Comunidad de Desarrolladores',
		description:
			'Foro para compartir proyectos, artículos y recursos de desarrollo web con autenticación y sistema de votaciones.',
		tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Clerk'],
		website: 'https://devhub.com',
		github: 'https://github.com/usuario/devhub',
		images: [
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
			'/certificados/certificado1.jpg',
		],
		video: '/projects/devhub-demo.mp4',
	},
];

export default projects;
