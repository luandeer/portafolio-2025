import { ExternalLink } from 'lucide-react';
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
      className="group relative grid w-full grid-cols-[auto_1fr] items-start gap-3.5 rounded-xl border border-gray-400/30 bg-gradient-to-b from-gray-500/20 to-gray-500/10 p-3 transition-all hover:bg-slate-900"
    >
      {/* Ícono de enlace externo */}
      <div className="absolute top-4 right-4 text-gray-500 transition-colors group-hover:text-slate-300">
        <ExternalLink size={16} />
      </div>

      {/* Ícono principal */}
      <div className="text-3xl">{icon}</div>

      {/* Contenedor de texto */}
      <div className="w-full">
        <h3 className="text-sm font-semibold text-white">{name}</h3>
        <p className="line-clamp-1 w-full pr-5 text-xs break-all text-gray-500">{handle}</p>
      </div>
    </a>
  );
}
