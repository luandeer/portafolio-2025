import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ButtonPortafolio() {
  return (
    <div className="flex items-center justify-start">
      <Link
        href="/proyectos"
        className="group relative overflow-hidden rounded-xl border border-white/20 bg-gradient-to-b from-gray-500/20 to-gray-500/10 px-8 py-2.5 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-slate-900 hover:shadow-lg"
      >
        <span className="relative z-10 flex items-center gap-2 text-sm">
          <span>Ver Proyectos</span>
          <ArrowRight className="size-[18px]" />
        </span>
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </div>
  );
}
