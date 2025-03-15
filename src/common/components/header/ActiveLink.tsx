import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { IconProps } from '@/common/types/icon';

interface Props {
	name: string;
	href: string;
	icon?: React.FC<IconProps>; // Ahora icon es un componente React
	useIncludes?: boolean; // Nuevo campo para decidir si usar includes
}

export const ActiveLink = ({
	name,
	href,
	icon: Icon,
	useIncludes = false,
}: Props) => {
	const pathname = usePathname();

	// Lógica para determinar si el enlace está activo
	const isActive = useIncludes ? pathname.includes(href) : pathname === href;

	return (
		<Link
			href={href}
			className={clsx(
				'flex h-auto grow items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-[#F08241] hover:text-white md:flex-none md:justify-start',
				{
					'bg-[#F08241] text-white hover:bg-[#F08241] hover:text-white':
						isActive,
				}
			)}
		>
			{/* Renderiza el icono si existe, de lo contrario usa un icono por defecto */}
			{Icon ? <Icon size={20} /> : <></>}
			<p className="hidden md:block">{name}</p>
		</Link>
	);
};
