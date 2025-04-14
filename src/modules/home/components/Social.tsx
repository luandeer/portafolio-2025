'use client';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
	ChevronDown,
	Github,
	Instagram,
	Linkedin,
	LinkIcon,
} from 'lucide-react';
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
		icon: <Linkedin className="size-4 text-gray-300" />,
		url: 'https://www.linkedin.com/in/telmoalexander/',
		style:
			' bg-gradient-to-b from-[#0A66C2]/20 to-[#0A66C2]/10  border border-[#0A66C2]/30  shadow-md',
	},
	{
		id: 3,
		label: 'GitHub',
		icon: <Github className="size-4 text-gray-300" />,
		url: 'https://github.com/luandeer',
		style:
			'bg-gradient-to-b from-gray-700/20 to-gray-700/10  border border-gray-600/30',
	},
	{
		id: 4,
		label: 'Instagram',
		icon: <Instagram className="size-4 text-gray-300" />,
		url: 'https://www.instagram.com/alexanderpreg/',
		style: 'bg-[#be185d]/20  border border-[#be185d]/20',
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
									`${link.style} p-1.5 rounded-lg text-white transition flex items-center justify-center`
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
						<DropdownMenuTrigger className="flex items-center gap-1 text-sm md:text-base text-white">
							<LinkIcon className="size-4 md:size-5" />
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
