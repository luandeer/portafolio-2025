'use client';

import Autoscroll from 'embla-carousel-auto-scroll';
import { cn } from '@/lib/utils';
import { Certificate, CertificationsData } from '@/common/data/Certifications';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/common/components/ui/carousel';
import StyleCarousel from '../style/home.module.css';
import { useCallback, useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/common/components/ui/dialog';
import { CertificateCardComponent } from './ItemCarousel';
import { Button } from '@/common/components/ui/button';
import { Award, X } from 'lucide-react';
import Image from 'next/image';

export const CarouselCertifications = () => {
	const [selectedCertificate, setSelectedCertificate] =
		useState<Certificate | null>(null);
	const data = CertificationsData();

	const handleCardClick = useCallback((cert: Certificate) => {
		setSelectedCertificate(cert);
	}, []);

	const handleCloseModal = useCallback(() => {
		setSelectedCertificate(null);
	}, []);

	return (
		<>
			<Carousel
				opts={{
					loop: true,
					align: 'start',
				}}
				plugins={[
					Autoscroll({
						startDelay: 0,
						speed: 1.5,
						stopOnMouseEnter: true,
						stopOnFocusIn: false,
						stopOnInteraction: false,
					}),
				]}
				className={cn(StyleCarousel.carouselShadow, 'w-full')}
			>
				<CarouselContent className="w-full">
					{data.map((certificado) => {
						return (
							<CarouselItem
								key={certificado.title}
								className="basis-1/2 sm:basis-1/3 w-full "
							>
								<CertificateCardComponent
									{...certificado}
									onClick={handleCardClick}
								/>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>

			<Dialog open={!!selectedCertificate} onOpenChange={handleCloseModal}>
				<DialogContent className="lg:!max-w-[75vw] max-w-[95vw] w-[95vw] lg:!w-[75vw] !max-h-[95vh] p-0 !border-none rounded-lg overflow-hidden bg-transparent">
					<DialogHeader className="hidden">
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when youre done.
						</DialogDescription>
					</DialogHeader>
					{selectedCertificate && (
						<div className="relative w-full h-full flex flex-col">
							<div className="relative w-full h-full flex flex-col ">
								<div className="bg-blue-900 text-primary-foreground px-6 py-4 flex items-center justify-between">
									<div className="flex items-center gap-2">
										<Award className="h-6 w-6" />
										<h2 className="md:text-xl font-semibold line-clamp-1">
											{selectedCertificate.title}
										</h2>
									</div>
									<Button
										variant="ghost"
										size="icon"
										className="rounded-full hover:bg-primary-foreground/10 hover:text-white cursor-pointer"
										onClick={handleCloseModal}
									>
										<X className="h-5 w-5" />
									</Button>
								</div>

								<div className="flex-1 overflow-auto p-6 flex flex-col lg:flex-row gap-6  lg:justify-center bg-[#f8f9fa]">
									<div className="relative w-full max-w-[1000px]  aspect-video overflow-hidden  border border-gray-200 dark:border-gray-700 rounded-lg shadow bg-white dark:bg-gray-800">
										<Image
											src={selectedCertificate.imageUrl || '/placeholder.svg'}
											alt={selectedCertificate.alt || 'certificado'}
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
												<p className="text-base">{selectedCertificate.title}</p>
											</div>

											<div>
												<h4 className="text-sm font-medium text-muted-foreground">
													Institución
												</h4>
												<p className="text-base">
													{selectedCertificate.institution}
												</p>
											</div>

											<div>
												<h4 className="text-sm font-medium text-muted-foreground">
													Fecha de Emisión
												</h4>
												<p className="text-base">{selectedCertificate.date}</p>
											</div>

											<div>
												<h4 className="text-sm font-medium text-muted-foreground">
													Tipo de Certificado
												</h4>
												<div className="mt-1">{selectedCertificate.type}</div>
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
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
};
