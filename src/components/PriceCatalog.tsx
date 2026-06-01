import { useState } from "react";

type Product = {
  name: string;
  brand: string;
  description: string;
  details: string;
  usage: string;
  price: number;
  ozon_url: string;
  image: string;
};

const catalog = [
  {
    category: "Удилища",
    emoji: "🎣",
    products: [
      { name: "NorStream Branch 662M", brand: "NorStream", description: "Спиннинг универсальный, тест 7–28г, длина 1.98м", details: "Лёгкое графитовое удилище с быстрым строем. Пропускные кольца Fuji, рукоять из пробки. Отлично передаёт поклёвку, удобно в руке.", usage: "Спиннинговая ловля щуки, окуня и судака на джиг, воблеры и блёсны. Подходит для береговой рыбалки и с лодки.", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=NorStream+Branch+спиннинг", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/cfa7dfa7-9a55-4f4a-a7aa-8f19d321c771.jpg" },
      { name: "Daiwa N'zon S Feeder", brand: "Daiwa", description: "Фидерное удилище, тест до 100г, длина 3.6м", details: "Трёхсекционное удилище с двумя сменными квивертипами. Кольца с твёрдыми вставками, бланк из высокомодульного углеволокна.", usage: "Фидерная ловля карпа, леща и плотвы на реках и озёрах со средним течением. Оптимально на дистанции 30–60м.", price: 2745, ozon_url: "https://www.ozon.ru/search/?text=Daiwa+Nzon+фидер", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/20eac346-71aa-473c-ab89-f3358995aaaf.jpg" },
      { name: "Salmo Diamond Carp 3.6м", brand: "Salmo", description: "Карповое удилище, 2 части, тест 3.5lb", details: "Двухсекционный карповый бланк из углеволокна. Кольца Fuji, катушкодержатель с надёжным фиксатором. Строй medium-slow.", usage: "Ловля карпа, амура и крупного леща методом волосяной оснастки, пружиной или методным монтажом.", price: 1504, ozon_url: "https://www.ozon.ru/search/?text=Salmo+Diamond+Carp+удилище", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/59094148-8125-4fd2-9bef-fd0d7bb0602b.jpg" },
      { name: "Zemex Taurus 12ft", brand: "Zemex", description: "Фидерное удилище, тест до 80г, длина 3.6м", details: "Компактное фидерное удилище с тремя сменными вершинками (мягкая, средняя, жёсткая). Лёгкий бланк, хорошая чувствительность.", usage: "Универсальная фидерная рыбалка: карась, лещ, плотва. Хорошо работает на стоячей воде и слабом течении.", price: 1551, ozon_url: "https://www.ozon.ru/search/?text=Zemex+Taurus+фидер", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/49da3759-6cc3-4693-a924-a1c8728102d5.jpg" },
    ] as Product[],
  },
  {
    category: "Катушки",
    emoji: "🔄",
    products: [
      { name: "Shimano Twin Power 2500", brand: "Shimano", description: "Безынерционная, универсальная, 5 подшипников", details: "Алюминиевый корпус, система торможения Power Drag, передаточное число 5.0:1. Вес 250г. Ёмкость шпули: 0.25мм/140м.", usage: "Спиннинг на щуку, окуня, форель. Отлично подходит для джига, воблеров и лёгких блёсен.", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=Shimano+Twin+Power+катушка", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/78e7b41b-4d7d-42c7-9385-696c020f20fd.jpg" },
      { name: "Daiwa Caldia LT 3000", brand: "Daiwa", description: "Безынерционная, лёгкая серия, плавный ход", details: "Корпус из высококачественного пластика, система ATD (тормоз), 6 шарикоподшипников. Вес всего 220г. Передаточное число 5.2:1.", usage: "Универсальная рыбалка: спиннинг, фидер, поплавочная ловля. Идеальна для новичков и любителей.", price: 3200, ozon_url: "https://www.ozon.ru/search/?text=Daiwa+Caldia+LT+катушка", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/dad44890-a7f4-40c3-a94e-c98271bed83d.jpg" },
      { name: "Abu Garcia Fune DLC", brand: "Abu Garcia", description: "Мультипликаторная, универсальная для хищника", details: "Низкопрофильный корпус, магнитная тормозная система, 7+1 подшипников. Передаточное число 7.1:1. Вес 190г.", usage: "Ловля щуки и судака на крупные джиговые приманки, воблеры и тяжёлые блёсны. Особенно эффективна при дальних забросах.", price: 5500, ozon_url: "https://www.ozon.ru/search/?text=Abu+Garcia+Fune+катушка", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/6a294e27-c940-4f69-bf12-7c438a474658.jpg" },
      { name: "Stinger Blaxter 100L", brand: "Stinger", description: "Мультипликаторная, бюджетная, левая рука", details: "Круглый профиль, центробежная тормозная система, 4 подшипника. Вместительная шпуля. Передаточное число 6.3:1.", usage: "Троллинг, ловля сома и крупного хищника на тяжёлые приманки. Хорошо подходит для морской рыбалки.", price: 4200, ozon_url: "https://www.ozon.ru/search/?text=Stinger+Blaxter+катушка", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/729e3c47-1301-433f-bacf-ec19d0bb5729.jpg" },
    ] as Product[],
  },
  {
    category: "Приманки",
    emoji: "🪝",
    products: [
      { name: "Pontoon 21 Moby Dick 120F", brand: "Pontoon 21", description: "Воблер, длина 120мм, вес 29.5г, floating", details: "Плавающий воблер с заглублением до 1.2м. Тройные крючки Owner. Яркая расцветка с реалистичной чешуёй, широкое родное движение.", usage: "Ловля щуки и крупного окуня на мелководьях, среди водорослей и коряг. Незаменим ранним утром и в сумерках.", price: 2200, ozon_url: "https://www.ozon.ru/search/?text=Pontoon+21+Moby+Dick+воблер", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/49372030-f28a-400c-a248-8e349a239e9e.jpg" },
      { name: "JAXON Holo Reflex 20г", brand: "JAXON", description: "Колебалка с голографическим покрытием", details: "Штампованная блесна с голографическим покрытием. Тройник с красным люрексом. Стабильная игра на любой скорости проводки.", usage: "Ловля щуки, судака и форели на реках и водохранилищах. Работает на равномерной и ступенчатой проводке.", price: 1014, ozon_url: "https://www.ozon.ru/search/?text=JAXON+Holo+Reflex+блесна", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/39f579c0-dc05-4075-922a-0f37e9d73653.jpg" },
      { name: "JACKALL I Shad Tail", brand: "JACKALL", description: "Виброхвост силиконовый, несколько размеров", details: "Японский силикон высокой плотности. Хвост-виброхвост с активной игрой при любой скорости. Запах аниса. Длина 3–5 дюймов.", usage: "Джиговая ловля судака, щуки и окуня. Незаменим при пассивном клёве — хвост работает даже на падении.", price: 400, ozon_url: "https://www.ozon.ru/search/?text=JACKALL+I+Shad+силикон", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/58e103ac-42f0-482c-871c-14552a388580.jpg" },
      { name: "Lucky John Basara Shad", brand: "Lucky John", description: "Силиконовый твистер, универсальная расцветка", details: "Мягкий силикон с рифлёным телом и лопастным хвостом. Несколько расцветок: натуральные и яркие. Упаковка 5–7 штук.", usage: "Окунёвая рыбалка на микроджиг, ловля судака и щуки на отводной поводок и джиг-головку.", price: 380, ozon_url: "https://www.ozon.ru/search/?text=Lucky+John+Basara+Shad", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/dcb4f57a-a099-490b-92d0-eb1df92b5919.jpg" },
    ] as Product[],
  },
  {
    category: "Снаряжение",
    emoji: "🎒",
    products: [
      { name: "Salmo UT 3000-080", brand: "Salmo", description: "Садок рыболовный, длина 80см, 2 секции", details: "Садок из плотной сетки с металлическими кольцами. Длина 80см, диаметр 35см. Двойная молния, карабин для крепления к берегу.", usage: "Хранение живой рыбы во время соревнований и рыбалки. Подходит для карася, плотвы, леща.", price: 2800, ozon_url: "https://www.ozon.ru/search/?text=Salmo+садок+рыболовный", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/4c590285-02ad-405d-a699-a71434ddc1a4.jpg" },
      { name: "Salmo Подсак складной", brand: "Salmo", description: "Подсачек телескопический, 180–200см", details: "Телескопическая ручка из алюминия, раскладная рама из нержавейки. Сетка из капрона. Диаметр головки 50см. Вес 600г.", usage: "Подъём крупной рыбы с берега или лодки. Незаменим при ловле карпа, щуки и крупного леща.", price: 1800, ozon_url: "https://www.ozon.ru/search/?text=Salmo+подсак+складной", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/785b8819-9087-4c21-b0f9-4d08d4d93f4d.jpg" },
      { name: "Flagman Ящик для снастей", brand: "Flagman", description: "Ящик с отделениями для приманок и снастей", details: "Прочный пластиковый корпус, 3 яруса с регулируемыми перегородками. Замки-защёлки, удобная ручка для переноски. Размер 38×26×17см.", usage: "Хранение и транспортировка блёсен, воблеров, джиговых головок, крючков и мелкой фурнитуры.", price: 3500, ozon_url: "https://www.ozon.ru/search/?text=Flagman+ящик+для+снастей", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/105059d4-0d98-46ca-bbf1-e3b83da74e00.jpg" },
      { name: "Fishprofi Садок 3.0м", brand: "Fishprofi", description: "Садок из быстросохнущей ткани, длина 3м", details: "Длинный садок из современного быстросохнущего материала. Металлические кольца через каждые 30см. Карабин и стальной колышек в комплекте.", usage: "Соревновательная рыбалка, удержание большого улова. Вмещает рыбу весом до 10кг.", price: 585, ozon_url: "https://www.ozon.ru/search/?text=Fishprofi+садок+рыболовный", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/5c6265b9-1fde-4677-a452-567f8ce0a7ba.jpg" },
    ] as Product[],
  },
  {
    category: "Поплавочные снасти",
    emoji: "🪶",
    products: [
      { name: "Salmo Diamond Bolognese 450", brand: "Salmo", description: "Болонское удилище, тест 3–15г, длина 4.5м", details: "5-секционное болонское удилище из углеволокна. Кольца Fuji SIC, пробковая рукоять. Строй medium-fast, отличная чувствительность.", usage: "Ловля плотвы, леща и язя на течении с поплавком. Подходит для рыбалки на реках средней полосы.", price: 1787, ozon_url: "https://www.ozon.ru/search/?text=Salmo+Diamond+Bolognese+удилище", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/a2c9173e-5d37-46ba-a0e0-41740de0a49f.jpg" },
      { name: "Team Salmo Bolognese 700", brand: "Salmo", description: "Болонское удилище, тест 2–15г, длина 7м", details: "Профессиональное болонское удилище, 7 секций. Сверхлёгкий бланк IM-8. Кольца с твёрдыми вставками, катушкодержатель Fuji.", usage: "Спортивная и любительская ловля на длинных прогонах реки. Позволяет удерживать оснастку в нужной точке даже на быстром течении.", price: 3812, ozon_url: "https://www.ozon.ru/search/?text=Team+Salmo+Bolognese+700", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/4ceaf788-066b-4bf1-821a-6f942c626003.jpg" },
      { name: "Feeder Concept Поплавки", brand: "Feeder Concept", description: "Набор поплавков, разная грузоподъёмность", details: "Набор из 10 поплавков: 0.5г, 1г, 1.5г, 2г, 3г. Материал — бальса с покрытием. Антенна из стекловолокна, яркая окраска.", usage: "Поплавочная ловля карася, плотвы, окуня на стоячей воде и слабом течении. Хорошо видны на расстоянии.", price: 1200, ozon_url: "https://www.ozon.ru/search/?text=Feeder+Concept+поплавки+набор", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/0ac3d7b9-d0e6-4c54-9a4b-2cdcead2d4da.jpg" },
      { name: "Salmo готовая оснастка", brand: "Salmo", description: "Готовая оснастка с крючками для поплавочной ловли", details: "Готовая поводковая оснастка: леска 0.12–0.16мм, крючки №12–16, грузила и стопоры в комплекте. Упаковка 5 поводков.", usage: "Быстрая замена при обрыве, удобно для начинающих. Ловля карася, плотвы и окуня на червя, мотыля или опарыша.", price: 850, ozon_url: "https://www.ozon.ru/search/?text=Salmo+готовая+оснастка+поплавочная", image: "https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/599065bc-b6fb-49fb-968f-89043fa7cabd.jpg" },
    ] as Product[],
  },
];

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-2xl sm:mx-4 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Мобильная шапка */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 sm:hidden sticky top-0 bg-white z-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">{product.brand}</p>
            <p className="font-semibold text-neutral-900 text-sm leading-snug">{product.name}</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 text-2xl leading-none p-1">×</button>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 sm:shrink-0 aspect-square sm:aspect-auto">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col p-5 sm:p-6 gap-4 flex-1">
            {/* Десктопная шапка */}
            <div className="hidden sm:flex items-start justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{product.brand}</p>
                <h3 className="text-lg font-bold text-neutral-900 leading-snug">{product.name}</h3>
              </div>
              <button onClick={onClose} className="text-neutral-400 hover:text-neutral-900 text-2xl leading-none shrink-0">×</button>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">О товаре</p>
              <p className="text-sm text-neutral-700 leading-relaxed">{product.details}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Применение</p>
              <p className="text-sm text-neutral-700 leading-relaxed">{product.usage}</p>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
              <span className="text-2xl font-bold text-neutral-900">
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
              <a
                href={product.ozon_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm uppercase tracking-wide text-white bg-[#005BFF] hover:bg-[#0047CC] transition-colors duration-200"
              >
                Купить на Озон
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PriceCatalog() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Все");

  const categories = ["Все", ...catalog.map((s) => s.category)];
  const filtered = activeCategory === "Все" ? catalog : catalog.filter((s) => s.category === activeCategory);

  return (
    <section id="prices" className="bg-white py-14 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-xs sm:text-sm tracking-widest mb-3">Цены</p>
        <h2 className="text-neutral-900 text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 leading-tight">
          Каталог товаров
        </h2>
        <p className="text-neutral-500 mb-8 text-sm sm:text-lg">Средний ценовой сегмент · Актуальные цены · Доставка по России</p>

        {/* Фильтры — горизонтальный скролл на мобиле */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm uppercase tracking-wide border whitespace-nowrap transition-colors duration-150 shrink-0 ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-12 sm:gap-20">
          {filtered.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-3 mb-5 sm:mb-8 border-b border-neutral-100 pb-3 sm:pb-4">
                <span className="text-xl sm:text-2xl">{section.emoji}</span>
                <h3 className="text-base sm:text-xl font-bold uppercase tracking-wide text-neutral-900">{section.category}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {section.products.map((product) => (
                  <div
                    key={product.name}
                    onClick={() => setSelected(product)}
                    className="border border-neutral-100 flex flex-col hover:border-neutral-300 hover:shadow-md transition-all duration-200 cursor-pointer group active:scale-95"
                  >
                    <div className="aspect-square overflow-hidden bg-neutral-50 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 hidden sm:flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm uppercase tracking-wide bg-black/60 px-3 py-1.5">
                          Подробнее
                        </span>
                      </div>
                    </div>
                    <div className="p-3 sm:p-5 flex flex-col gap-1 sm:gap-2 flex-1">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-0.5 truncate">{product.brand}</p>
                        <p className="font-semibold text-neutral-900 leading-snug text-sm sm:text-base line-clamp-2">{product.name}</p>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed flex-1 line-clamp-2 hidden sm:block">{product.description}</p>
                      <div className="flex items-center justify-between mt-auto pt-2 sm:pt-3 border-t border-neutral-100">
                        <span className="text-base sm:text-lg font-bold text-neutral-900">
                          {product.price.toLocaleString("ru-RU")} ₽
                        </span>
                        <span className="text-xs text-neutral-400 uppercase tracking-wide">→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 bg-neutral-950 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <p className="text-white text-lg sm:text-xl font-bold mb-1">Не нашли нужный товар?</p>
            <p className="text-neutral-400 text-sm">Напишите нам — подберём под ваш запрос и бюджет</p>
          </div>
          <a
            href="https://t.me/Drew_Pn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-8 py-3 bg-white text-black uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300 shrink-0"
          >
            Написать в Telegram
          </a>
        </div>
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}