import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/f7ead2a1-00e3-43cc-8109-23eb05592f88/files/230baf69-c12c-40f0-b107-25a3f0574029.jpg"
            alt="Рыболовные приманки"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-6 sm:top-12 right-4 sm:right-6 text-white uppercase z-10 text-xs sm:text-sm md:text-base lg:text-lg">
        Тысячи товаров в наличии
      </h3>

      <p className="absolute bottom-6 sm:bottom-12 left-4 right-4 sm:left-auto sm:right-6 text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10 leading-snug">
        Приманки на любой вкус, для любого водоёма и сезона. Найди свою идеальную снасть и выходи на рекордный улов.
      </p>
    </div>
  );
}