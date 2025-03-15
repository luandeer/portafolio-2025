'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Award, X, ZoomIn } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/common/components/ui/dialog';
import { Button } from '@/common/components/ui/button';

interface CertificateCardProps {
	imageUrl: string;
	title: string;
	institution: string;
	date: string;
	type: string;
	alt?: string;
}

export default function CertificateCard({
	imageUrl = '/placeholder.svg?height=800&width=1100',
	title = 'Certificado de Finalización',
	institution = 'Universidad Nacional',
	date = 'Junio 2023',
	type = 'Diploma',
	alt = 'Certificado',
}: CertificateCardProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild className="ring-0 focus:ring-0 focus:outline-none">
				<button className="w-full" onPointerDown={(e) => e.preventDefault()}>
					<div className=" cursor-pointer w-full aspect-video  group rounded-lg bg-gray-800">
						<div className="px-4 pt-4 pb-2 ">
							<div className="relative aspect-video  overflow-hidden w-full h-full rounded-t-md  flex-col  ">
								<Image
									src={imageUrl || '/placeholder.svg'}
									alt={alt}
									fill
									className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 will-change-transform"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 ease-out">
									<div className="bg-black/30  p-3 rounded-full transform scale-50 group-hover:scale-100 transition-all duration-300 ease-out">
										<ZoomIn className="h-6 w-6 text-white" />
									</div>
								</div>
							</div>

							<div className="pt-2 ">
								<div className="flex items-start gap-1.5 ">
									<Award className="h-5 w-5 text-gray-100 mt-1 flex-shrink-0" />
									<h3 className="font-medium text-sm text-start leading-tight text-gray-100 line-clamp-2 max-w-[125px]">
										{title}
									</h3>
								</div>
							</div>
						</div>
					</div>
				</button>
			</DialogTrigger>
			<DialogContent className="lg:!max-w-[75vw] max-w-[95vw] w-[95vw] lg:!w-[75vw] !max-h-[95vh] p-0 !border-none rounded-lg overflow-hidden bg-transparent ">
				<DialogHeader className="hidden">
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when youre done.
					</DialogDescription>
				</DialogHeader>
				<div className="relative w-full h-full flex flex-col ">
					<div className="bg-gray-900 text-primary-foreground px-6 py-4 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Award className="h-6 w-6" />
							<h2 className="md:text-xl font-semibold line-clamp-1">{title}</h2>
						</div>
						<Button
							variant="ghost"
							size="icon"
							className="rounded-full hover:bg-primary-foreground/10 hover:text-white cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							<X className="h-5 w-5" />
						</Button>
					</div>

					<div className="flex-1 overflow-auto p-6 flex flex-col lg:flex-row gap-6  lg:justify-center bg-[#f8f9fa]">
						<div className="relative w-full max-w-[1000px]  aspect-video overflow-hidden  border border-gray-200 dark:border-gray-700 rounded-lg shadow bg-white dark:bg-gray-800">
							<Image
								src={imageUrl || '/placeholder.svg'}
								alt={alt}
								fill
								className="object-fill "
							/>
						</div>

						<div className="w-full lg:w-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
							<h3 className="font-semibold text-lg mb-4">
								Detalles del Certificado
							</h3>

							<div className="space-y-4">
								<div>
									<h4 className="text-sm font-medium text-muted-foreground">
										Título
									</h4>
									<p className="text-base">{title}</p>
								</div>

								<div>
									<h4 className="text-sm font-medium text-muted-foreground">
										Institución
									</h4>
									<p className="text-base">{institution}</p>
								</div>

								<div>
									<h4 className="text-sm font-medium text-muted-foreground">
										Fecha de Emisión
									</h4>
									<p className="text-base">{date}</p>
								</div>

								<div>
									<h4 className="text-sm font-medium text-muted-foreground">
										Tipo de Certificado
									</h4>
									<div className="mt-1">{type}</div>
								</div>
							</div>

							{/* <div className="mt-6 pt-6 border-t">
								<Button
									className="w-full"
									onClick={() => window.open(imageUrl, '_blank')}
								>
									<Download className="mr-2 h-4 w-4" />
									Descargar Certificado
								</Button>
							</div> */}
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
