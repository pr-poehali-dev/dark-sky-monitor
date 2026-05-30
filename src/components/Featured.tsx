export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/166f3081-d236-40aa-851b-25374953276f.jpg"
          alt="Рыболовные снасти"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Только профессиональное снаряжение</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Спиннинги, фидеры, катушки, приманки и всё необходимое для рыбалки — от проверенных брендов с гарантией качества и быстрой доставкой по всей России.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
            Перейти в каталог
          </button>
          <a
            href="https://t.me/Drew_Pn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-black hover:text-white uppercase tracking-wide w-fit"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  );
}