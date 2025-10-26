'use client';

import Autoscroll from 'embla-carousel-auto-scroll';
import { cn } from '@/lib/utils';
import { CertificationsData } from '@/common/data/Certifications';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/common/components/ui/carousel';
import StyleCarousel from '../style/home.module.css';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/common/components/ui/dialog';
import { Button } from '@/common/components/ui/button';
import { Award, X } from 'lucide-react';
import Image from 'next/image';
import { useCertificateModalStore } from '../store/useCertificateModalStore';
import { ItemCarousel } from './certification/ItemCarousel';

export const CarouselCertifications = () => {
	const data = CertificationsData();
	const { selectedCertificate, isOpen, closeModal } =
		useCertificateModalStore();

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
						stopOnMouseEnter: !isOpen,
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
								<ItemCarousel {...certificado} />
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>

			<Dialog open={isOpen} onOpenChange={closeModal}>
				<DialogContent className="lg:!max-w-[75vw] max-w-[95vw] w-[95vw] lg:!w-[75vw] !max-h-[95vh] p-0 !border-none rounded-lg overflow-hidden bg-transparent">
					<DialogHeader className="sr-only">
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
										onClick={closeModal}
									>
										<X className="h-5 w-5" />
									</Button>
								</div>

								<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] w-full bg-[#f8f9fa] p-6 items-start justify-center gap-10">
									<div className="relative w-full  aspect-video overflow-hidden  border border-gray-200 dark:border-gray-700 rounded-lg shadow bg-white dark:bg-gray-800">
										<Image
											src={selectedCertificate.imageUrl || '/placeholder.svg'}
											alt={selectedCertificate.alt || 'certificado'}
											fill
											className="object-contain"
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
