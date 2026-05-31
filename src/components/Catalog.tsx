const categories = [
  {
    title: "Удилища",
    description: "Спиннинги, фидеры, поплавочные и карповые удилища от ведущих брендов",
    emoji: "🎣",
    items: ["Спиннинги", "Фидеры", "Карповые", "Поплавочные"],
  },
  {
    title: "Катушки",
    description: "Безынерционные, мультипликаторные и инерционные катушки для любых условий",
    emoji: "🔄",
    items: ["Безынерционные", "Мультипликаторные", "Инерционные", "Зимние"],
  },
  {
    title: "Приманки",
    description: "Воблеры, блёсны, джиг, силикон и натуральные наживки для любого хищника",
    emoji: "🪝",
    items: ["Воблеры", "Блёсны", "Силикон", "Джиг"],
  },
  {
    title: "Снаряжение",
    description: "Подсаки, садки, ящики, одежда и всё необходимое для комфортной рыбалки",
    emoji: "🎒",
    items: ["Подсаки и садки", "Ящики", "Одежда", "Аксессуары"],
  },
];

export default function Catalog() {
  return (
    <section id="catalog" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-4">Каталог</p>
        <h2 className="text-white text-4xl lg:text-6xl font-bold mb-16 leading-tight">
          Всё для рыбалки<br />в одном месте
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-neutral-950 p-8 flex flex-col gap-6 hover:bg-neutral-900 transition-colors duration-300 group cursor-pointer"
            >
              <span className="text-4xl">{cat.emoji}</span>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{cat.description}</p>
              </div>
              <ul className="flex flex-col gap-1 mt-auto">
                {cat.items.map((item) => (
                  <li key={item} className="text-neutral-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-600 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/Drew_Pn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-white text-sm uppercase tracking-wide border-b border-neutral-700 pb-1 w-fit group-hover:border-white transition-colors duration-300"
              >
                Узнать цены →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
