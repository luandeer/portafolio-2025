import Image from 'next/image';

export default function Education() {
  const events = [
    {
      year: '(2018 - 2024)',
      title: 'Universidad Nacional Mayor De San Marcos (UNMSM)',
      description: 'Ingeniería de Software - Grado de Bachiller',
      image: '/unmsm.svg',
    },
    {
      year: '(2023)',
      title: 'Programa One Oracle Next Education - Alura Latam',
      description: 'Junior Frontend Developer - Graduado',
      image: '/alura1.png',
    },
  ];

  return (
    <div>
      <div>
        {events.map((event, index) => (
          <div key={index} className="py-2">
            <div className="flex items-start gap-3 text-sm md:text-base">
              <Image
                src={event.image}
                alt={event.title}
                className="h-auto w-[30px] rounded-xs object-cover"
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <h3 className="mb-1 text-xs text-gray-300">{event.year}</h3>
                <h3>{event.title}</h3>
                <p className="text-sm text-gray-300">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
