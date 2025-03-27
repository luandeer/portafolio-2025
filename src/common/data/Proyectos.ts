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
		handle: 'bluehouse',
		title: 'Bluehouse',
		description:
			'Desarrollé la plantilla frontend para Bluhouse, creando la interfaz de usuario para su plataforma inmobiliaria. Esta plantilla actúa como la base visual y estructural del proyecto. El desarrollo fue realizado durante mi tiempo en Nerd, asegurando una experiencia de usuario intuitiva y adaptable a las necesidades del sector inmobiliario.',
		tech: ['Javascript', 'Tailwind CSS', 'Vercel', 'css', 'swiper js'],
		website: 'https://bluhouse-beta.vercel.app/',
		dominio: 'bluehouse.vercel.app',
		images: [
			'/proyectos/bluehouse/1.webp',
			'/proyectos/bluehouse/2.webp',
			'/proyectos/bluehouse/3.webp',
		],
	},
	{
		handle: 'grupo-cala',
		title: 'Grupo Cala',
		description:
			'Desarrollé la plantilla frontend para el Grupo Cala, implementando la interfaz de usuario tanto para la versión de Perú como la de Colombia. Esta plantilla sirve como la base visual y estructural del proyecto, sobre la cual luego se integra la parte backend para gestionar y administrar el contenido dinámico. El desarrollo fue realizado durante mi tiempo en Nerd, asegurando una experiencia de usuario optimizada y adaptable a las necesidades del negocio.',
		tech: ['Javascript', 'Tailwind CSS', 'Vercel', 'css', 'swiper js'],
		website: 'https://cala-frontend.vercel.app/',
		dominio: 'cala-frontend.vercel.app',
		github: 'https://github.com/luandeer/cala-frontend',
		images: [
			'/proyectos/grupo-cala/4.webp',
			'/proyectos/grupo-cala/3.webp',
			'/proyectos/grupo-cala/1.webp',
			'/proyectos/grupo-cala/2.webp',
		],
	},
	{
		handle: 'fundacion-ignacia',
		title: 'Fundacion Ignacia',
		description:
			'Desarrollé la plantilla frontend para la Fundación Ignacia, proporcionando la estructura visual. Este proyecto, realizado durante mi tiempo en Nerd, fue diseñado para ofrecer una experiencia de usuario accesible y adaptable a las necesidades de la fundación, facilitando la comunicación y difusión de su labor.',
		tech: ['Javascript', 'Tailwind CSS', 'Vercel', 'css', 'swiper js'],
		website: 'https://fundacion-ignacia-dun.vercel.app/',
		dominio: 'fundacion-ignacia.vercel.app',
		github: 'https://github.com/luandeer/fundacion-ignacia',
		images: [
			'/proyectos/fundacion-ignacia/1.webp',
			'/proyectos/fundacion-ignacia/2.webp',
			'/proyectos/fundacion-ignacia/3.webp',
		],
	},

	{
		handle: 'generador-qr',
		title: 'Generador QR',
		description:
			'Desarrollé junto a Gustavo Noriega un generador de códigos QR como mini proyecto colaborativo. Me encargué del desarrollo del frontend, diseñando una interfaz intuitiva y accesible, mientras que Gustavo implementó la funcionalidad para generar los códigos. El proyecto permite a los usuarios crear QR personalizados de manera rápida y sencilla, brindando una herramienta práctica para compartir información de forma eficiente.',
		tech: ['Javascript', 'Tailwind CSS', 'Vercel', 'Cloudinary'],
		website: 'https://generador-de-qr-nine.vercel.app/',
		dominio: 'Generadorqr.vercel.app',
		images: ['/proyectos/generadorqr/qr.webp'],
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
	{
		handle: 'Jhigger',
		title: 'Juegos Jhigger',
		description:
			'Desarrollé un sitio web dinámico con una galería de imágenes conectada a  Google Sheets, permitiendo una fácil actualización del contenido sin conocimientos técnicos. El proyecto destaca por su interfaz intuitiva y su capacidad para mostrar y organizar imágenes de forma fluida, optimizando la experiencia del usuario.',
		tech: ['React', 'TypeScript', 'Firebase', 'Recharts'],
		website: 'https://www.juegosjhigger.pe/',
		images: ['/proyectos/jhigger/01.webp', '/proyectos/jhigger/02.webp'],
		dominio: 'juegosjhigger.pe',
		video: '/projects/fittrack-demo.mp4',
	},
];

export default projects;
