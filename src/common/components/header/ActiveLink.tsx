import { IconProps } from '@/common/types/icon';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  name: string;
  href: string;
  icon?: React.FC<IconProps>; // Ahora icon es un componente React
  useIncludes?: boolean; // Nuevo campo para decidir si usar includes
}

export const ActiveLink = ({ name, href, icon: Icon, useIncludes = false }: Props) => {
  const pathname = usePathname();

  // Lógica para determinar si el enlace está activo
  const isActive = useIncludes ? pathname.includes(href) : pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        'flex h-7 grow items-center justify-center gap-2 rounded-md border border-gray-400/30 bg-gradient-to-b from-gray-500/20 to-gray-500/10 px-3 text-xs font-medium hover:bg-gray-900 hover:text-white md:flex-none md:justify-start',
        {
          'rounded-md bg-gray-900 text-white hover:text-white': isActive,
        }
      )}
    >
      {/* Renderiza el icono si existe, de lo contrario usa un icono por defecto */}
      {Icon ? <Icon size={16} /> : <></>}
      <p className="hidden md:block">{name}</p>
    </Link>
  );
};
