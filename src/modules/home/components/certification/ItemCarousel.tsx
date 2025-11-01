import { Certificate } from '@/common/data/Certifications';
import { Award, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useCertificateModalStore } from '../../store/useCertificateModalStore';

export const ItemCarousel = ({
  imageUrl,
  title,
  institution,
  date,
  type,
  alt = 'Certificado',
}: Certificate) => {
  const openModal = useCertificateModalStore((state) => state.openModal);

  const handleClick = () => {
    openModal({ imageUrl, title, institution, date, type, alt });
  };
  return (
    <button
      onClick={handleClick}
      className="group aspect-video w-full cursor-pointer rounded-lg"
      aria-label={`Ver certificado: ${title}`}
    >
      <div className="relative h-full w-full flex-col overflow-hidden rounded-t-md">
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={alt}
          width={300}
          height={200}
          placeholder="blur"
          blurDataURL="/certificados/placeholder.svg"
          className="h-full w-full object-cover transition-all duration-300 will-change-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
          <div className="scale-50 transform rounded-full bg-black/30 p-3 transition-all duration-300 ease-out group-hover:scale-100">
            <ZoomIn className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-b-lg bg-gray-800 px-4 py-2">
        <Award className="h-4 w-4 max-w-full text-gray-50" />
        <h3 className="line-clamp-1 flex-1 text-start text-sm leading-tight font-medium text-gray-100">
          {title}
        </h3>
      </div>
    </button>
  );
};
