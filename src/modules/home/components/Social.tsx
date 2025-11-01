'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/common/components/ui/tooltip';
import { ChevronDown, Github, Instagram, Linkedin, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

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
  },
  {
    id: 3,
    label: 'GitHub',
    icon: <Github className="size-4 text-gray-300" />,
    url: 'https://github.com/luandeer',
  },
  {
    id: 4,
    label: 'Instagram',
    icon: <Instagram className="size-4 text-gray-300" />,
    url: 'https://www.instagram.com/alexanderpreg/',
  },
];

interface SocialMediaLinksProps {
  displayMode?: 'desktop' | 'mobile' | 'both';
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ displayMode = 'both' }) => {
  return (
    <div>
      {/* 💻 Versión Desktop */}
      {(displayMode === 'both' || displayMode === 'desktop') && (
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-square w-7 items-center justify-center rounded-md border border-gray-400/30 bg-gradient-to-b from-gray-500/20 to-gray-500/10"
                >
                  {link.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                sideOffset={8}
                className="bg-gray-900 text-white"
                showArrow={false}
              >
                {link.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      )}

      {/* 📱 Versión Mobile */}
      {(displayMode === 'both' || displayMode === 'mobile') && (
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-white md:text-base">
              <LinkIcon className="size-4 md:size-5" />
              social
              <span>
                <ChevronDown className="size-2" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={20} className="rounded-xl border-none bg-gray-800">
              {socialLinks.map((link) => (
                <Link key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                  <DropdownMenuItem className="flex items-center gap-2 rounded-xl text-white focus:bg-gray-700 focus:text-white">
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
