'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/common/components/ui/accordion';
import Image from 'next/image';
import events from '../data/experienceData.json';
import { cn } from '@/lib/utils';

export default function Experiencie() {
	return (
		<Accordion type="single" collapsible>
			{events.map((event, index) => (
				<AccordionItem
					key={index}
					value={`item-${index}`}
					className="relative border-b-0 group "
				>
					{/* Línea vertical */}
					<div
						className={cn(
							'absolute left-[14px] w-[1px] top-[30px] h-full bg-gray-800 ',
							// el último ítem solo la muestra cuando está abierto
							index === events.length - 1 &&
								'group-data-[state=closed]:w-0 group-data-[state=closed]:opacity-0'
						)}
					/>

					<AccordionTrigger className="hover:no-underline relative z-10">
						<div className="flex items-start gap-3 w-full">
							<Image
								src={event.image}
								alt={event.company}
								className="object-cover w-full max-w-[30px] h-[30px] bg-white rounded-md border border-gray-800"
								width={30}
								height={30}
							/>
							<div className="flex flex-col gap-0.5 w-full">
								<div className="flex flex-wrap items-center gap-x-2 w-full">
									<h3 className="font-semibold leading-none">{event.role}</h3>
									{event.link ? (
										<a
											href={event.link}
											target="_blank"
											rel="noopener noreferrer"
											className="font-medium text-blue-400 text-xs hover:underline"
										>
											@{event.company}
										</a>
									) : (
										<span className="font-medium text-gray-300 text-xs">
											@{event.company}
										</span>
									)}
								</div>
								<h3 className="text-xs mb-1 text-gray-400">{event.year}</h3>
							</div>
						</div>
					</AccordionTrigger>

					<AccordionContent className="pl-[40px] ">
						<p className="text-sm text-gray-400 mb-3 whitespace-pre-line">
							{event.summary}
						</p>

						<h4 className="font-semibold text-gray-200 text-sm mt-2 mb-1">
							Responsabilidades
						</h4>
						<ul className="list-disc list-outside text-sm text-gray-400 mb-3  marker:text-sm pl-6.5">
							{event.responsibilities.map((r, i) => (
								<li key={i}>{r}</li>
							))}
						</ul>

						{event.projects?.length > 0 && (
							<>
								<h4 className="font-semibold text-gray-200 text-sm mt-2 mb-1">
									Proyectos
								</h4>
								<ul className="text-sm text-gray-400 space-y-2">
									{event.projects.map((p, i) => (
										<li key={i}>
											<span className="font-medium text-gray-300">
												{p.name}
											</span>
											: {p.description}
										</li>
									))}
								</ul>
							</>
						)}

						{event.achievements?.length > 0 && (
							<>
								<h4 className="font-semibold text-gray-200 text-sm mt-3 mb-1">
									Logros
								</h4>
								<ul className="list-disc list-outside text-sm text-gray-400 mb-3  marker:text-sm pl-6.5">
									{event.achievements.map((a, i) => (
										<li key={i}>{a}</li>
									))}
								</ul>
							</>
						)}

						<div className="flex flex-wrap gap-2 mt-8">
							{event.tags.map((tag, i) => (
								<span
									key={i}
									className="px-4 py-1 rounded-lg text-xs font-medium bg-primary text-gray-300 border border-primary/20 transition-all duration-200"
								>
									{tag}
								</span>
							))}
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
