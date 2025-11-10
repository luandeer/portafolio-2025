import { IconProps } from '@/common/types/icon';
import { cn } from '@/lib/utils';
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
      className={cn(
        'relative w-fit cursor-pointer text-sm font-medium text-gray-50 transition-colors',
        // efecto base del subrayado animado
        'after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:bg-gray-50 after:transition-all after:duration-300',
        'hover:after:left-0 hover:after:w-full',
        // estilos del estado activo
        isActive && 'text-white after:left-0 after:w-full after:bg-gray-50'
      )}
    >
      <div className="flex items-center justify-center gap-2 text-xs font-medium">
        {Icon && <Icon size={16} />}
        <p className="hidden md:block">{name}</p>
      </div>
    </Link>
  );
};
