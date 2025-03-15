import { Book, FolderKanban } from 'lucide-react';

export const links = [
	{
		name: 'Proyectos',
		href: '/proyectos',
		icon: FolderKanban,
		useIncludes: true, // Se compara la ruta exacta
	},
	{
		name: 'Guestbook',
		href: '#',
		icon: Book,
		useIncludes: false, // Se compara la ruta exacta
	},
];
