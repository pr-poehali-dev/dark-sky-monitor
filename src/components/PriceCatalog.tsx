const catalog = [
  {
    category: "Удилища",
    emoji: "🎣",
    image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/7235d501-a0a1-44d3-aa26-2a54958c0b29.jpg",
    products: [
      { name: "NorStream Branch 662M", brand: "NorStream", description: "Спиннинг универсальный, тест 7–28г, длина 1.98м", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=NorStream+Branch+спиннинг" },
      { name: "Daiwa N'zon S Feeder", brand: "Daiwa", description: "Фидерное удилище, тест до 100г, длина 3.6м", price: 2745, ozon_url: "https://www.ozon.ru/search/?text=Daiwa+Nzon+фидер" },
      { name: "Salmo Diamond Carp 3.6м", brand: "Salmo", description: "Карповое удилище, 2 части, тест 3.5lb", price: 1504, ozon_url: "https://www.ozon.ru/search/?text=Salmo+Diamond+Carp+удилище" },
      { name: "Zemex Taurus 12ft", brand: "Zemex", description: "Фидерное удилище, тест до 80г, длина 3.6м", price: 1551, ozon_url: "https://www.ozon.ru/search/?text=Zemex+Taurus+фидер" },
    ],
  },
  {
    category: "Катушки",
    emoji: "🔄",
    image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/d3aa5d40-307a-4744-9750-9f2f4aa05e69.jpg",
    products: [
      { name: "Shimano Twin Power 2500", brand: "Shimano", description: "Безынерционная, универсальная, 5 подшипников", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=Shimano+Twin+Power+катушка" },
      { name: "Daiwa Caldia LT 3000", brand: "Daiwa", description: "Безынерционная, лёгкая серия, плавный ход", price: 3200, ozon_url: "https://www.ozon.ru/search/?text=Daiwa+Caldia+LT+катушка" },
      { name: "Abu Garcia Fune DLC", brand: "Abu Garcia", description: "Мультипликаторная, универсальная для хищника", price: 5500, ozon_url: "https://www.ozon.ru/search/?text=Abu+Garcia+Fune+катушка" },
      { name: "Stinger Blaxter 100L", brand: "Stinger", description: "Мультипликаторная, бюджетная, левая рука", price: 4200, ozon_url: "https://www.ozon.ru/search/?text=Stinger+Blaxter+катушка" },
    ],
  },
  {
    category: "Приманки",
    emoji: "🪝",
    image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/8fcb44c5-7b66-4f6c-9745-04e891d06d2a.jpg",
    products: [
      { name: "Pontoon 21 Moby Dick 120F", brand: "Pontoon 21", description: "Воблер, длина 120мм, вес 29.5г, floating", price: 2200, ozon_url: "https://www.ozon.ru/search/?text=Pontoon+21+Moby+Dick+воблер" },
      { name: "JAXON Holo Reflex 20г", brand: "JAXON", description: "Колебалка с голографическим покрытием", price: 1014, ozon_url: "https://www.ozon.ru/search/?text=JAXON+Holo+Reflex+блесна" },
      { name: "JACKALL I Shad Tail", brand: "JACKALL", description: "Виброхвост силиконовый, несколько размеров", price: 400, ozon_url: "https://www.ozon.ru/search/?text=JACKALL+I+Shad+силикон" },
      { name: "Lucky John Basara Shad", brand: "Lucky John", description: "Силиконовый твистер, универсальная расцветка", price: 380, ozon_url: "https://www.ozon.ru/search/?text=Lucky+John+Basara+Shad" },
    ],
  },
  {
    category: "Снаряжение",
    emoji: "🎒",
    image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/d8c20f3a-e3b3-4de0-b07c-2bd450b44fa5.jpg",
    products: [
      { name: "Salmo UT 3000-080", brand: "Salmo", description: "Садок рыболовный, длина 80см, 2 секции", price: 2800, ozon_url: "https://www.ozon.ru/search/?text=Salmo+садок+рыболовный" },
      { name: "Salmo Подсак складной", brand: "Salmo", description: "Подсачек телескопический, 180–200см", price: 1800, ozon_url: "https://www.ozon.ru/search/?text=Salmo+подсак+складной" },
      { name: "Flagman Ящик для снастей", brand: "Flagman", description: "Ящик с отделениями для приманок и снастей", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=Flagman+ящик+для+снастей" },
      { name: "Fishprofi Садок 3.0м", brand: "Fishprofi", description: "Садок из быстросохнущей ткани, длина 3м", price: 585, ozon_url: "https://www.ozon.ru/search/?text=Fishprofi+садок+рыболовный" },
    ],
  },
  {
    category: "Поплавочные снасти",
    emoji: "🪶",
    image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/0b05c7e8-9bcd-46b8-baee-0f1cddf4f6f2.jpg",
    products: [
      { name: "Salmo Diamond Bolognese 450", brand: "Salmo", description: "Болонское удилище, тест 3–15г, длина 4.5м", price: 1787, ozon_url: "https://www.ozon.ru/search/?text=Salmo+Diamond+Bolognese+удилище" },
      { name: "Team Salmo Bolognese 700", brand: "Salmo", description: "Болонское удилище, тест 2–15г, длина 7м", price: 3812, ozon_url: "https://www.ozon.ru/search/?text=Team+Salmo+Bolognese+700" },
      { name: "Feeder Concept Поплавки", brand: "Feeder Concept", description: "Набор поплавков, разная грузоподъёмность", price: 1200, ozon_url: "https://www.ozon.ru/search/?text=Feeder+Concept+поплавки+набор" },
      { name: "Salmo готовая оснастка", brand: "Salmo", description: "Готовая оснастка с крючками для поплавочной ловли", price: 850, ozon_url: "https://www.ozon.ru/search/?text=Salmo+готовая+оснастка+поплавочная" },
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

        <div className="flex flex-col gap-20">
          {catalog.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-3 mb-8 border-b border-neutral-100 pb-4">
                <span className="text-2xl">{section.emoji}</span>
                <h3 className="text-xl font-bold uppercase tracking-wide text-neutral-900">{section.category}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.products.map((product) => (
                  <div
                    key={product.name}
                    className="border border-neutral-100 flex flex-col hover:border-neutral-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="aspect-square overflow-hidden bg-neutral-50">
                      <img
                        src={section.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-1">
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
                          href={product.ozon_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs uppercase tracking-wide text-white bg-[#005BFF] px-3 py-1.5 hover:bg-[#0047CC] transition-colors duration-200"
                        >
                          Купить на Озон
                        </a>
                      </div>
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
