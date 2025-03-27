export interface Certificate {
	imageUrl: string;
	title: string;
	institution: string;
	date: string;
	type: string;
	alt?: string;
}
export function CertificationsData(): Certificate[] {
	return [
		{
			imageUrl: '/certificados/certificado1.webp',
			title: 'Scrum Master Certified',
			institution: 'CertiProf',
			date: '2023',
			type: 'Certificación',
			alt: 'certificado de scrum master',
		},
		{
			imageUrl: '/certificados/certificado2.webp',
			title: 'Junior Frontend Developer',
			institution: 'Programa Oracle Next Education - Alura Latam',
			date: '2023',
			type: 'Programa de Entrenamiento',
			alt: 'certficacion como frontend developer',
		},
		{
			imageUrl: '/certificados/certificado3.webp',
			title: 'Github para programadores',
			institution: 'Linkedin',
			date: '2023',
			type: 'Curso',
			alt: 'certificacion de Github ',
		},
		{
			imageUrl: '/certificados/certificado4.webp',
			title: 'Bachiller en Ingeniería de Software',
			institution: 'UNMSM',
			date: '2025',
			type: 'Grado de bachiller',
			alt: 'bachiller en ingeniería de software',
		},
		// {
		// 	imageUrl: '/certificados/constancia.webp',
		// 	title: 'Constancia de Egresado',
		// 	institution: 'UNMSM',
		// 	date: '2025',
		// 	type: 'Certificado',
		// 	alt: 'Constancia de egresado en ingeniería de software',
		// },
	];
}
