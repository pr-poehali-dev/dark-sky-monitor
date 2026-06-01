import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/d4d76f89-1ee4-4e4d-9d24-47ba91e4bf99.jpg"
          alt="Рыбалка на рассвете"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6">
          РЫБАЧЬ
        </h1>
        <p className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Всё для настоящей рыбалки — снасти, приманки и снаряжение от лучших мировых брендов
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
          <a
            href="#catalog"
            className="inline-block px-6 sm:px-8 py-3.5 sm:py-3 bg-white text-black uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
          >
            Смотреть каталог
          </a>
          <a
            href="https://t.me/Drew_Pn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3.5 sm:py-3 bg-transparent text-white border border-white uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  );
}