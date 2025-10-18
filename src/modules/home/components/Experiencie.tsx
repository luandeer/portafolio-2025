'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/common/components/ui/accordion';
import Image from 'next/image';
import events from '../data/experienceData.json';

export default function Experiencie() {
	return (
		<Accordion type="single" collapsible>
			{events.map((event, index) => (
				<AccordionItem
					key={index}
					value={`item-${index}`}
					className="border-b border-gray-800"
				>
					<AccordionTrigger className="hover:no-underline">
						<div className="flex items-start gap-3 w-full">
							<Image
								src={event.image}
								alt={event.company}
								className="object-cover w-full max-w-[30px] h-[30px] bg-white rounded-sm border border-gray-800"
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

					<AccordionContent>
						<p className="text-sm text-gray-300">{event.description}</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{event.tags.map((tag, i) => (
								<span
									key={i}
									className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md"
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
