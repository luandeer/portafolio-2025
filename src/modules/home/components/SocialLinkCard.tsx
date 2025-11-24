import type { ReactNode } from 'react';

interface SocialLinkCardProps {
  id: string;
  name: string;
  handle: string;
  icon: ReactNode;
  url: string;
}

export function SocialLinkCard({ name, handle, icon, url }: SocialLinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex w-fit items-center gap-2.5 border-b border-neutral-800 pb-2 transition-colors duration-300 hover:border-neutral-500"
    >
      {/* Ícono de enlace externo */}

      {/* Ícono principal */}
      <div className="text-gray-300">{icon}</div>
      <h4 className="text-sm leading-none font-semibold text-gray-300">{name}</h4>

      {/* Contenedor de texto */}
      {/* <div className="w-full space-y-0.5">
        <h4 className="text-sm leading-none font-semibold text-white">{name}</h4>
        <p className="line-clamp-1 w-full pr-5 text-xs break-all text-gray-500">{handle}</p>
      </div> */}
    </a>
  );
}
