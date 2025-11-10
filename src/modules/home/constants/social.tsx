import { GithubIcon } from '@/common/icons/GithubIcon';
import { InstagramIcon } from '@/common/icons/InstagramIcon';
import { LinkedInIcon } from '@/common/icons/LinkedInIcon';
import { TwitterIcon } from '@/common/icons/TwitterIcon';
import { Mail } from 'lucide-react';

export const socialProfiles = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Alexander Perez',
    icon: <LinkedInIcon size={32} />,
    url: 'https://www.linkedin.com/in/telmoalexander',
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: '@luandeer',
    icon: <GithubIcon size={32} />,
    url: 'https://github.com/luandeer',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@alexanderpreg',
    icon: <InstagramIcon size={32} />,
    url: 'https://www.instagram.com/alexanderpreg',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    handle: '@alexanderpreg',
    icon: <TwitterIcon size={32} />,
    url: 'https://x.com/alexanderpreg',
  },
  {
    id: 'gmail',
    name: 'Gmail',
    handle: 'alexanderperezreginaldo@gmail.com',
    icon: <Mail size={32} />,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=alexanderperezreginaldo@gmail.com',
  },
];
