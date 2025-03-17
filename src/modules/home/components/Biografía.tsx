export default function Biography() {
	const events = [
		{
			year: '2000',
			description: 'Nací en Lima, Perú.',
		},
		{
			year: '2023',
			description:
				'Completé el Programa One Oracle Next Education - Alura Latam, donde me gradué como Junior Frontend Developer.',
		},
		{
			year: '2024',
			description:
				'Egresé de la carrera de Ingeniería de software en la Universidad Nacional Mayor De San Marcos(UNMSM) ',
		},

		{
			year: 'presente',
			description:
				'Obtuve el grado de bachiller en Ingeniería de Software y actualmente trabajo como Frontend Developer.',
		},
	];

	return (
		<div>
			<div>
				{events.map((event, index) => (
					<div
						key={index}
						className="grid grid-cols-[70px_1fr] gap-2  py-1.5 md:grid-cols-[80px_1fr]"
					>
						<div className="text-sm font-bold text-white ">{event.year}</div>
						<div className="text-sm text-gray-300 md:text-base">
							{event.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
