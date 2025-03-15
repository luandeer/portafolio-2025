'use client';
import { ActiveLink } from './ActiveLink';
import { links } from '@/common/data/Nav';

export const NavLinks = () => {
	return (
		<div className="flex w-full items-center gap-2">
			{links.map((link) => {
				return <ActiveLink key={link.name} {...link} />;
			})}
		</div>
	);
};
