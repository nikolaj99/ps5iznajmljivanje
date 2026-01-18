import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { games } from 'src/games';

export const metadata: Metadata = {
  title: 'Igre',
};

export default function GamesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Igre za iznajmljivanje
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.slug}
            className="overflow-hidden rounded-xl border shadow hover:shadow-lg transition"
          >
            <Link href={`/igre/${game.slug}`}>
              <Image
                src={game.image}
                alt={game.title}
                width={680}
                height={300}
                className="h-100 w-full object-contain bg-white"
              />
              <h2 className="p-4 text-center font-bold">
                {game.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
