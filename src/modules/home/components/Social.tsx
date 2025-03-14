'use client';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Github, Linkedin, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';

interface SocialLink {
	id: number;
	label: string;
	icon: ReactNode;
	url: string;
	style?: string;
}

const socialLinks: SocialLink[] = [
	{
		id: 2,
		label: 'LinkedIn',
		icon: <Linkedin className="size-5" />,
		url: 'https://www.linkedin.com/in/telmoalexander/',
		style: 'bg-sky-700',
	},
	{
		id: 3,
		label: 'GitHub',
		icon: <Github className="size-5" />,
		url: 'https://github.com/luandeer',
		style: 'bg-gray-700',
	},
];

interface SocialMediaLinksProps {
	displayMode?: 'desktop' | 'mobile' | 'both';
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
	displayMode = 'both',
}) => {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div>
			{/* Versión Desktop */}
			{(displayMode === 'both' || displayMode === 'desktop') && (
				<div className="flex items-center gap-1">
					{socialLinks.map((link) => (
						<div
							key={link.id}
							className="relative group flex items-center justify-center"
							onMouseEnter={() => setHovered(link.id)}
							onMouseLeave={() => setHovered(null)}
						>
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									`${link.style} p-2 rounded-xl text-white transition flex items-center justify-center`
								)}
							>
								{link.icon}
							</a>

							<span
								className={`${
									hovered === link.id ? 'opacity-100' : 'opacity-0'
								} absolute top-11 left-1/2 transform -translate-x-1/2 ${
									link.style
								} text-white text-xs px-2 py-1 rounded-md transition-opacity duration-200 pointer-events-none md:group-hover:opacity-100 md:block hidden`}
							>
								{link.label}
							</span>
						</div>
					))}
				</div>
			)}

			{/* Versión Mobile */}
			{(displayMode === 'both' || displayMode === 'mobile') && (
				<div>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-1 text-white">
							<LinkIcon />
							social
							<span>
								<ChevronDown className="size-2" />
							</span>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							sideOffset={20}
							className="bg-gray-800 border-none rounded-xl"
						>
							{socialLinks.map((link) => (
								<Link
									key={link.id}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<DropdownMenuItem className="text-white focus:text-white rounded-xl focus:bg-gray-700">
										{link.icon}
										{link.label}
									</DropdownMenuItem>
								</Link>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			)}
		</div>
	);
};

export default SocialMediaLinks;
