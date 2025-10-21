import { useState } from 'react';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'hobbies', label: 'Увлечения' },
    { id: 'fandoms', label: 'Фандомы' },
    { id: 'manhwa', label: 'Манхвы' }
  ];

  const hobbies = [
    { title: 'Чтение', description: 'Погружение в миры книг и историй' },
    { title: 'Искусство', description: 'Визуальное самовыражение через творчество' },
    { title: 'Музыка', description: 'Звуковые ландшафты и атмосфера' }
  ];

  const fandoms = [
    {
      title: 'Dark Fantasy',
      image: 'https://cdn.poehali.dev/projects/822ee08b-9262-4c25-b867-efd33746e993/files/fb63e16f-c5f1-4599-9d8d-90209765c153.jpg'
    },
    {
      title: 'Gothic Literature',
      image: 'https://cdn.poehali.dev/projects/822ee08b-9262-4c25-b867-efd33746e993/files/f073e840-5a4d-4fe3-81c3-a6710a7da7f3.jpg'
    },
    {
      title: 'Mystery & Horror',
      image: 'https://cdn.poehali.dev/projects/822ee08b-9262-4c25-b867-efd33746e993/files/acaf387d-f297-4640-98af-4e592869a66f.jpg'
    }
  ];

  const manhwa = [
    {
      title: 'The Remarried Empress',
      image: 'https://cdn.poehali.dev/projects/822ee08b-9262-4c25-b867-efd33746e993/files/fb63e16f-c5f1-4599-9d8d-90209765c153.jpg'
    },
    {
      title: 'Omniscient Reader',
      image: 'https://cdn.poehali.dev/projects/822ee08b-9262-4c25-b867-efd33746e993/files/f073e840-5a4d-4fe3-81c3-a6710a7da7f3.jpg'
    },
    {
      title: 'Solo Leveling',
      image: 'https://cdn.poehali.dev/projects/822ee08b-9262-4c25-b867-efd33746e993/files/acaf387d-f297-4640-98af-4e592869a66f.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-black py-8 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-center tracking-tight">
          ◆
        </h1>
        <nav className="mt-8 flex justify-center gap-8 flex-wrap">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`gothic-link text-sm md:text-base font-crimson uppercase tracking-wider ${
                activeSection === item.id ? 'font-semibold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {activeSection === 'about' && (
          <section className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair mb-8 text-center">
              Обо мне
            </h2>
            <div className="max-w-2xl mx-auto space-y-6 font-crimson text-lg leading-relaxed">
              <p className="border-l-2 border-black pl-6">
                Добро пожаловать в моё личное пространство — место, где минимализм встречается с готической эстетикой.
              </p>
              <p className="border-l-2 border-black pl-6">
                Я создаю этот сайт как отражение моих интересов, увлечений и того, что меня вдохновляет. Здесь нет ничего лишнего — только то, что действительно важно.
              </p>
              <p className="border-l-2 border-black pl-6">
                Чёрное и белое — не просто цвета, это философия контраста, чистоты и глубины.
              </p>
            </div>
          </section>
        )}

        {activeSection === 'hobbies' && (
          <section className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair mb-12 text-center">
              Увлечения
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {hobbies.map((hobby, idx) => (
                <Card
                  key={idx}
                  className="gothic-card p-8 border-2 border-black rounded-none cursor-pointer"
                >
                  <h3 className="text-2xl font-playfair mb-4">{hobby.title}</h3>
                  <p className="font-crimson text-muted-foreground">{hobby.description}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'fandoms' && (
          <section className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair mb-12 text-center">
              Фандомы
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {fandoms.map((fandom, idx) => (
                <div
                  key={idx}
                  className="gothic-card group cursor-pointer border-2 border-black overflow-hidden"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={fandom.image}
                      alt={fandom.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 border-t-2 border-black">
                    <h3 className="text-xl font-playfair text-center">{fandom.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'manhwa' && (
          <section className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair mb-12 text-center">
              Манхвы
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {manhwa.map((item, idx) => (
                <div
                  key={idx}
                  className="gothic-card group cursor-pointer border-2 border-black overflow-hidden"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 border-t-2 border-black">
                    <h3 className="text-xl font-playfair text-center">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-black py-8 mt-16">
        <p className="text-center font-crimson text-sm">
          ◆ {new Date().getFullYear()} ◆
        </p>
      </footer>
    </div>
  );
};

export default Index;
