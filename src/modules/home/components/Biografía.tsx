import { MapPin, GraduationCap, Code2, Globe, Mail } from 'lucide-react';

export default function Biography() {
	const events = [
		{
			icon: <Code2 className="size-4 text-gray-300" />,
			description: 'Software Engineering & Full Stack Developer',
		},
		{
			icon: <MapPin className="size-4 text-gray-300" />,
			description: 'Lima, Perú.',
		},
		{
			icon: <GraduationCap className="size-4 text-gray-300" />,
			description: 'Graduado en Ingeniería de Software (UNMSM)',
		},
		{
			icon: <Mail className="size-4 text-gray-300" />,
			description: 'alexanderperezreginaldo@gmail.com',
		},

		{
			icon: <Globe className="size-4 text-gray-300" />,
			description: 'telmoalexander.com',
		},
	];

	return (
		<div className="space-y-2">
			{events.map((event, index) => (
				<div
					key={index}
					className="grid grid-cols-[28px_1fr] gap-3 items-center"
				>
					<div className="flex items-center justify-center bg-gradient-to-b from-gray-500/20 to-gray-500/10  border border-gray-400/30 rounded-md aspect-square w-7">
						{event.icon}
					</div>
					<div className="text-sm text-gray-300 font-normal leading-tight">
						{event.description}
					</div>
				</div>
			))}
		</div>
	);
}
