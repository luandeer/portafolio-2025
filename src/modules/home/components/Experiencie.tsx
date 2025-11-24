'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/common/components/shadcn-ui/accordion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import events from '../data/experienceData.json';

export default function Experiencie() {
  return (
    <Accordion type="single" collapsible>
      {events.map((event, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="group relative border-b-0 last:overflow-hidden"
        >
          <div
            className={cn(
              'absolute top-[30px] left-[14px] h-full w-px bg-neutral-800',
              index === events.length - 1 &&
                'group-data-[state=closed]:w-0 group-data-[state=closed]:opacity-0'
            )}
          />

          <AccordionTrigger className="relative z-10 hover:no-underline">
            <div className="flex w-full items-start gap-3">
              <Image
                src={event.image}
                alt={event.company}
                className="h-[30px] w-full max-w-[30px] rounded-md border border-gray-800 bg-white object-cover"
                width={30}
                height={30}
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex w-full flex-wrap items-center gap-x-2">
                  <h3 className="leading-none font-semibold">{event.role}</h3>
                  {event.link ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-blue-400 hover:underline"
                    >
                      @{event.company}
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-gray-300">@{event.company}</span>
                  )}
                </div>
                <h3 className="mb-1 text-xs text-gray-400">{event.year}</h3>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pl-[40px]">
            <p className="mb-3 text-sm whitespace-pre-line text-gray-400">{event.summary}</p>

            <h4 className="mt-2 mb-1 text-sm font-semibold text-gray-200">Responsabilidades</h4>
            <ul className="mb-3 list-outside list-disc pl-6.5 text-sm text-gray-400 marker:text-sm">
              {event.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            {event.projects?.length > 0 && (
              <>
                <h4 className="mt-2 mb-1 text-sm font-semibold text-gray-200">Proyectos</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {event.projects.map((p, i) => (
                    <li key={i}>
                      <span className="font-medium text-gray-300">{p.name}</span>: {p.description}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {event.achievements?.length > 0 && (
              <>
                <h4 className="mt-3 mb-1 text-sm font-semibold text-gray-200">Logros</h4>
                <ul className="mb-3 list-outside list-disc pl-6.5 text-sm text-gray-400 marker:text-sm">
                  {event.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {event.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-primary border-primary/20 rounded-lg border px-4 py-1 text-xs font-medium text-gray-300 transition-all duration-200"
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
