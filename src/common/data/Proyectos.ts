type Project = {
	handle: string;
	title: string;
	description: string;
	tech: string[];
	website: string;
	github?: string;
	images: string[];
	video?: string;
	dominio?: string;
};

const projects: Project[] = [
	{
		handle: 'marus-catalogo',
		title: 'Catálogo Marus(Proyecto en desarrollo)',
		description:
			'Creé un catálogo virtual de productos con una base de datos centralizada, permitiendo a los usuarios explorar opciones de compra y realizar pedidos para domicilio. El sitio presenta una navegación sencilla, integrando opciones de búsqueda y detalles de cada producto para mejorar la experiencia de compra en línea.',
		tech: ['Javascript', 'Tailwind CSS', 'Vercel', 'Cloudinary'],
		website: 'https://marus.vercel.app/',
		dominio: 'marus.vercel.app',
		images: [
			'/proyectos/marus/1.png',
			'/proyectos/marus/3.png',
			'/proyectos/marus/2.png',
		],
		video: '/projects/sonqu-demo.mp4',
	},

	{
		handle: 'Jhigger',
		title: 'Juegos Jhigger',
		description:
			'Desarrollé un sitio web dinámico con una galería de imágenes conectada a  Google Sheets, permitiendo una fácil actualización del contenido sin conocimientos técnicos. El proyecto destaca por su interfaz intuitiva y su capacidad para mostrar y organizar imágenes de forma fluida, optimizando la experiencia del usuario.',
		tech: ['React', 'TypeScript', 'Firebase', 'Recharts'],
		website: 'https://www.juegosjhigger.pe/',
		images: ['/proyectos/jhigger/01.png', '/proyectos/jhigger/02.png'],
		dominio: 'juegosjhigger.pe',
		video: '/projects/fittrack-demo.mp4',
	},

	{
		handle: 'sistema-marus',
		title: 'Sistema de pedido',
		description:
			'Desarrollé un sistema de pedidos para la gestión interna de una pollería, que permite administrar solicitudes de consumo en mesas, para llevar y de delivery. Este sistema genera automáticamente órdenes de compra, optimizando el flujo de trabajo y facilitando la administración de pedidos. Con una interfaz intuitiva, mejora la eficiencia operativa, permitiendo un servicio más rápido y efectivo para los clientes.',
		tech: ['Javascript', 'Tailwind CSS', 'Vercel', 'Cloudinary'],
		website: 'https://sistema-marus.vercel.app/',
		dominio: 'sistema-marus.vercel.app',
		images: [
			'/proyectos/sistema-marus/2.png',
			'/proyectos/sistema-marus/1.png',
			'/proyectos/sistema-marus/3.png',
		],
		video: '/projects/eshop-demo.mp4',
	},
];

export default projects;
