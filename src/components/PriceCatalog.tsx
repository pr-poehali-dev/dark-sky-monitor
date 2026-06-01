const catalog = [
  {
    category: "Удилища",
    emoji: "🎣",
    products: [
      { name: "NorStream Branch 662M", brand: "NorStream", description: "Спиннинг универсальный, тест 7–28г, длина 1.98м", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=NorStream+Branch+спиннинг", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/cfa7dfa7-9a55-4f4a-a7aa-8f19d321c771.jpg" },
      { name: "Daiwa N'zon S Feeder", brand: "Daiwa", description: "Фидерное удилище, тест до 100г, длина 3.6м", price: 2745, ozon_url: "https://www.ozon.ru/search/?text=Daiwa+Nzon+фидер", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/20eac346-71aa-473c-ab89-f3358995aaaf.jpg" },
      { name: "Salmo Diamond Carp 3.6м", brand: "Salmo", description: "Карповое удилище, 2 части, тест 3.5lb", price: 1504, ozon_url: "https://www.ozon.ru/search/?text=Salmo+Diamond+Carp+удилище", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/59094148-8125-4fd2-9bef-fd0d7bb0602b.jpg" },
      { name: "Zemex Taurus 12ft", brand: "Zemex", description: "Фидерное удилище, тест до 80г, длина 3.6м", price: 1551, ozon_url: "https://www.ozon.ru/search/?text=Zemex+Taurus+фидер", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/49da3759-6cc3-4693-a924-a1c8728102d5.jpg" },
    ],
  },
  {
    category: "Катушки",
    emoji: "🔄",
    products: [
      { name: "Shimano Twin Power 2500", brand: "Shimano", description: "Безынерционная, универсальная, 5 подшипников", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=Shimano+Twin+Power+катушка", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/78e7b41b-4d7d-42c7-9385-696c020f20fd.jpg" },
      { name: "Daiwa Caldia LT 3000", brand: "Daiwa", description: "Безынерционная, лёгкая серия, плавный ход", price: 3200, ozon_url: "https://www.ozon.ru/search/?text=Daiwa+Caldia+LT+катушка", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/dad44890-a7f4-40c3-a94e-c98271bed83d.jpg" },
      { name: "Abu Garcia Fune DLC", brand: "Abu Garcia", description: "Мультипликаторная, универсальная для хищника", price: 5500, ozon_url: "https://www.ozon.ru/search/?text=Abu+Garcia+Fune+катушка", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/6a294e27-c940-4f69-bf12-7c438a474658.jpg" },
      { name: "Stinger Blaxter 100L", brand: "Stinger", description: "Мультипликаторная, бюджетная, левая рука", price: 4200, ozon_url: "https://www.ozon.ru/search/?text=Stinger+Blaxter+катушка", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/729e3c47-1301-433f-bacf-ec19d0bb5729.jpg" },
    ],
  },
  {
    category: "Приманки",
    emoji: "🪝",
    products: [
      { name: "Pontoon 21 Moby Dick 120F", brand: "Pontoon 21", description: "Воблер, длина 120мм, вес 29.5г, floating", price: 2200, ozon_url: "https://www.ozon.ru/search/?text=Pontoon+21+Moby+Dick+воблер", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/49372030-f28a-400c-a248-8e349a239e9e.jpg" },
      { name: "JAXON Holo Reflex 20г", brand: "JAXON", description: "Колебалка с голографическим покрытием", price: 1014, ozon_url: "https://www.ozon.ru/search/?text=JAXON+Holo+Reflex+блесна", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/39f579c0-dc05-4075-922a-0f37e9d73653.jpg" },
      { name: "JACKALL I Shad Tail", brand: "JACKALL", description: "Виброхвост силиконовый, несколько размеров", price: 400, ozon_url: "https://www.ozon.ru/search/?text=JACKALL+I+Shad+силикон", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/58e103ac-42f0-482c-871c-14552a388580.jpg" },
      { name: "Lucky John Basara Shad", brand: "Lucky John", description: "Силиконовый твистер, универсальная расцветка", price: 380, ozon_url: "https://www.ozon.ru/search/?text=Lucky+John+Basara+Shad", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/dcb4f57a-a099-490b-92d0-eb1df92b5919.jpg" },
    ],
  },
  {
    category: "Снаряжение",
    emoji: "🎒",
    products: [
      { name: "Salmo UT 3000-080", brand: "Salmo", description: "Садок рыболовный, длина 80см, 2 секции", price: 2800, ozon_url: "https://www.ozon.ru/search/?text=Salmo+садок+рыболовный", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/4c590285-02ad-405d-a699-a71434ddc1a4.jpg" },
      { name: "Salmo Подсак складной", brand: "Salmo", description: "Подсачек телескопический, 180–200см", price: 1800, ozon_url: "https://www.ozon.ru/search/?text=Salmo+подсак+складной", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/785b8819-9087-4c21-b0f9-4d08d4d93f4d.jpg" },
      { name: "Flagman Ящик для снастей", brand: "Flagman", description: "Ящик с отделениями для приманок и снастей", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=Flagman+ящик+для+снастей", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/105059d4-0d98-46ca-bbf1-e3b83da74e00.jpg" },
      { name: "Fishprofi Садок 3.0м", brand: "Fishprofi", description: "Садок из быстросохнущей ткани, длина 3м", price: 585, ozon_url: "https://www.ozon.ru/search/?text=Fishprofi+садок+рыболовный", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/5c6265b9-1fde-4677-a452-567f8ce0a7ba.jpg" },
    ],
  },
  {
    category: "Поплавочные снасти",
    emoji: "🪶",
    products: [
      { name: "Salmo Diamond Bolognese 450", brand: "Salmo", description: "Болонское удилище, тест 3–15г, длина 4.5м", price: 1787, ozon_url: "https://www.ozon.ru/search/?text=Salmo+Diamond+Bolognese+удилище", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/a2c9173e-5d37-46ba-a0e0-41740de0a49f.jpg" },
      { name: "Team Salmo Bolognese 700", brand: "Salmo", description: "Болонское удилище, тест 2–15г, длина 7м", price: 3812, ozon_url: "https://www.ozon.ru/search/?text=Team+Salmo+Bolognese+700", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/4ceaf788-066b-4bf1-821a-6f942c626003.jpg" },
      { name: "Feeder Concept Поплавки", brand: "Feeder Concept", description: "Набор поплавков, разная грузоподъёмность", price: 1200, ozon_url: "https://www.ozon.ru/search/?text=Feeder+Concept+поплавки+набор", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/0ac3d7b9-d0e6-4c54-9a4b-2cdcead2d4da.jpg" },
      { name: "Salmo готовая оснастка", brand: "Salmo", description: "Готовая оснастка с крючками для поплавочной ловли", price: 850, ozon_url: "https://www.ozon.ru/search/?text=Salmo+готовая+оснастка+поплавочная", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/599065bc-b6fb-49fb-968f-89043fa7cabd.jpg" },
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
                        src={product.image}
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
