import { Certificate } from '@/common/data/Certifications';
import { Award, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';

interface CertificateCardProps extends Certificate {
	onClick: (cert: Certificate) => void;
}

export const CertificateCardComponent = ({
	imageUrl,
	title,
	institution,
	date,
	type,
	alt = 'Certificado',
	onClick,
}: CertificateCardProps) => {
	const handleClick = useCallback(() => {
		onClick({ imageUrl, title, institution, date, type, alt });
	}, [imageUrl, title, institution, date, type, alt, onClick]);

	return (
		<button
			onClick={handleClick}
			className="cursor-pointer w-full group rounded-lg aspect-video "
			aria-label={`Ver certificado: ${title}`}
		>
			<div className="relative overflow-hidden w-full h-full rounded-t-md flex-col  ">
				<Image
					src={imageUrl || '/placeholder.svg'}
					alt={alt}
					width={300}
					height={200}
					placeholder="blur"
					blurDataURL="/certificados/placeholder.svg"
					className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 will-change-transform"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 ease-out">
					<div className="bg-black/30 p-3 rounded-full transform scale-50 group-hover:scale-100 transition-all duration-300 ease-out">
						<ZoomIn className="h-6 w-6 text-white" />
					</div>
				</div>
			</div>

			<div className="py-2 px-4 bg-gray-800 rounded-b-lg flex items-center gap-2">
				<Award className="w-4 h-4 text-gray-50 max-w-full" />
				<h3 className="font-medium text-sm text-start leading-tight text-gray-100 line-clamp-1 flex-1">
					{title}
				</h3>
			</div>
		</button>
	);
};
