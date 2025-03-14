'use client';

import Autoscroll from 'embla-carousel-auto-scroll';
import { cn } from '@/lib/utils';
import { CertificationsData } from '@/common/data/Certifications';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/common/components/ui/carousel';
import CertificateCard from './ItemCarousel';
import StyleCarousel from '../style/home.module.css';

export const CarouselCertifications = () => {
	const data = CertificationsData();

	return (
		<div className="w-full">
			<div className="w-full">
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
					<CarouselContent>
						{data.map(({ imageUrl, title, institution, date, type, alt }) => {
							return (
								<CarouselItem key={title} className="basis-1/2 sm:basis-1/3  ">
									<CertificateCard
										imageUrl={imageUrl}
										title={title}
										institution={institution}
										date={date}
										type={type}
										alt={alt}
									/>
								</CarouselItem>
							);
						})}
					</CarouselContent>

					{/* <CarouselPrevious className="-left-12 border-none bg-transparent text-sonqu-white-500 hover:bg-transparent hover:text-sonqu-white-500" />
          <CarouselNext className="-right-12 border-none bg-transparent text-sonqu-white-500 hover:bg-transparent hover:text-sonqu-white-500" /> */}
				</Carousel>
			</div>
		</div>
	);
};
