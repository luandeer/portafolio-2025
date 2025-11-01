'use client';
import { links } from '@/common/data/Nav';
import { ActiveLink } from './ActiveLink';

export const NavLinks = () => {
  return (
    <div className="flex w-full items-center gap-2">
      {links.map((link) => {
        return <ActiveLink key={link.name} {...link} />;
      })}
    </div>
  );
};
