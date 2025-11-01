import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ButtonPortafolio() {
  return (
    <div className="my-6 flex items-center justify-center">
      <Link
        href="/proyectos"
        className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 px-8 py-2.5 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
      >
        <span className="relative z-10 flex items-center gap-2">
          <span>Ver Proyectos</span>
          <ArrowRight className="size-[18px]" />
        </span>
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </div>
  );
}
