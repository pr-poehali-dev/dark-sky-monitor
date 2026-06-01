const catalog = [
  {
    category: "Удилища",
    emoji: "🎣",
    products: [
      { name: "NorStream Branch 662M", brand: "NorStream", description: "Спиннинг универсальный, тест 7–28г, длина 1.98м", price: 3500 },
      { name: "Daiwa N'zon S Feeder", brand: "Daiwa", description: "Фидерное удилище, тест до 100г, длина 3.6м", price: 2745 },
      { name: "Salmo Diamond Carp 3.6м", brand: "Salmo", description: "Карповое удилище, 2 части, тест 3.5lb", price: 1504 },
      { name: "Zemex Taurus 12ft", brand: "Zemex", description: "Фидерное удилище, тест до 80г, длина 3.6м", price: 1551 },
    ],
  },
  {
    category: "Катушки",
    emoji: "🔄",
    products: [
      { name: "Shimano Twin Power 2500", brand: "Shimano", description: "Безынерционная, универсальная, 5 подшипников", price: 3500 },
      { name: "Daiwa Caldia LT 3000", brand: "Daiwa", description: "Безынерционная, лёгкая серия, плавный ход", price: 3200 },
      { name: "Abu Garcia Fune DLC", brand: "Abu Garcia", description: "Мультипликаторная, универсальная для хищника", price: 5500 },
      { name: "Stinger Blaxter 100L", brand: "Stinger", description: "Мультипликаторная, бюджетная, левая рука", price: 4200 },
    ],
  },
  {
    category: "Приманки",
    emoji: "🪝",
    products: [
      { name: "Pontoon 21 Moby Dick 120F", brand: "Pontoon 21", description: "Воблер, длина 120мм, вес 29.5г, floating", price: 2200 },
      { name: "JAXON Holo Reflex 20г", brand: "JAXON", description: "Колебалка с голографическим покрытием", price: 1014 },
      { name: "JACKALL I Shad Tail", brand: "JACKALL", description: "Виброхвост силиконовый, несколько размеров", price: 400 },
      { name: "Lucky John Basara Shad", brand: "Lucky John", description: "Силиконовый твистер, универсальная расцветка", price: 380 },
    ],
  },
  {
    category: "Снаряжение",
    emoji: "🎒",
    products: [
      { name: "Salmo UT 3000-080", brand: "Salmo", description: "Садок рыболовный, длина 80см, 2 секции", price: 2800 },
      { name: "Salmo Подсак складной", brand: "Salmo", description: "Подсачек телескопический, 180–200см", price: 1800 },
      { name: "Flagman Ящик для снастей", brand: "Flagman", description: "Ящик с отделениями для приманок и снастей", price: 3500 },
      { name: "Fishprofi Садок 3.0м", brand: "Fishprofi", description: "Садок из быстросохнущей ткани, длина 3м", price: 585 },
    ],
  },
  {
    category: "Поплавочные снасти",
    emoji: "🪶",
    products: [
      { name: "Salmo Diamond Bolognese 450", brand: "Salmo", description: "Болонское удилище, тест 3–15г, длина 4.5м", price: 1787 },
      { name: "Team Salmo Bolognese 700", brand: "Salmo", description: "Болонское удилище, тест 2–15г, длина 7м", price: 3812 },
      { name: "Feeder Concept Поплавки", brand: "Feeder Concept", description: "Набор поплавков, разная грузоподъёмность", price: 1200 },
      { name: "Salmo готовая оснастка", brand: "Salmo", description: "Готовая оснастка с крючками для поплавочной ловли", price: 850 },
    ],
  },
];

export default function PriceCatalog() {
  return (
    <section id="prices" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-4">Цены</p>
        <h2 className="text-neutral-900 text-4xl lg:text-6xl font-bold mb-4 leading-tight">
          Каталог товаров
        </h2>
        <p className="text-neutral-500 mb-16 text-lg">Средний ценовой сегмент · Актуальные цены · Доставка по России</p>

        <div className="flex flex-col gap-16">
          {catalog.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-3 mb-6 border-b border-neutral-100 pb-4">
                <span className="text-2xl">{section.emoji}</span>
                <h3 className="text-xl font-bold uppercase tracking-wide text-neutral-900">{section.category}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.products.map((product) => (
                  <div
                    key={product.name}
                    className="border border-neutral-100 p-5 flex flex-col gap-3 hover:border-neutral-300 transition-colors duration-200"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{product.brand}</p>
                      <p className="font-semibold text-neutral-900 leading-snug">{product.name}</p>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed flex-1">{product.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100">
                      <span className="text-lg font-bold text-neutral-900">
                        {product.price.toLocaleString("ru-RU")} ₽
                      </span>
                      <a
                        href="https://t.me/Drew_Pn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-wide text-white bg-black px-3 py-1.5 hover:bg-neutral-700 transition-colors duration-200"
                      >
                        Купить
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-950 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white text-xl font-bold mb-1">Не нашли нужный товар?</p>
            <p className="text-neutral-400 text-sm">Напишите нам — подберём под ваш запрос и бюджет</p>
          </div>
          <a
            href="https://t.me/Drew_Pn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300 shrink-0"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
