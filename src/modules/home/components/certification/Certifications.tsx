'use client';

import { Button } from '@/common/components/shadcn-ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/common/components/shadcn-ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/common/components/shadcn-ui/dialog';
import { CertificationsData } from '@/common/data/Certifications';
import { cn } from '@/lib/utils';
import Autoscroll from 'embla-carousel-auto-scroll';
import { Award, X } from 'lucide-react';
import Image from 'next/image';
import { useCertificateModalStore } from '../../store/useCertificateModalStore';
import StyleCarousel from '../../style/home.module.css';
import { ItemCarousel } from './ItemCarousel';

export const CarouselCertifications = () => {
  const data = CertificationsData();
  const { selectedCertificate, isOpen, closeModal } = useCertificateModalStore();

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
              <CarouselItem key={certificado.title} className="w-full basis-1/2 sm:basis-1/3">
                <ItemCarousel {...certificado} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <Dialog open={isOpen} onOpenChange={closeModal}>
        <DialogContent className="!max-h-[95vh] w-[95vw] max-w-[95vw] overflow-hidden rounded-lg !border-none bg-transparent p-0 lg:!w-[75vw] lg:!max-w-[75vw]">
          <DialogHeader className="sr-only">
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          {selectedCertificate && (
            <div className="relative flex h-full w-full flex-col">
              <div className="relative flex h-full w-full flex-col">
                <div className="text-primary-foreground flex items-center justify-between bg-blue-900 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    <h2 className="line-clamp-1 font-semibold md:text-xl">
                      {selectedCertificate.title}
                    </h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary-foreground/10 cursor-pointer rounded-full hover:text-white"
                    onClick={closeModal}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid w-full grid-cols-1 items-start justify-center gap-5.5 bg-[#f8f9fa] p-6 lg:grid-cols-[1fr_300px] lg:gap-8">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                    <Image
                      src={selectedCertificate.imageUrl || '/placeholder.svg'}
                      alt={selectedCertificate.alt || 'certificado'}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="hidden w-full rounded-lg border border-gray-200 bg-white p-6 shadow lg:block lg:w-auto dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-4 text-lg font-semibold">Detalles del Certificado</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-muted-foreground text-sm font-medium">Título</h4>
                        <p className="text-base">{selectedCertificate.title}</p>
                      </div>

                      <div>
                        <h4 className="text-muted-foreground text-sm font-medium">Institución</h4>
                        <p className="text-base">{selectedCertificate.institution}</p>
                      </div>

                      <div>
                        <h4 className="text-muted-foreground text-sm font-medium">
                          Fecha de Emisión
                        </h4>
                        <p className="text-base">{selectedCertificate.date}</p>
                      </div>

                      <div>
                        <h4 className="text-muted-foreground text-sm font-medium">
                          Tipo de Certificado
                        </h4>
                        <div className="mt-1">{selectedCertificate.type}</div>
                      </div>
                    </div>
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
