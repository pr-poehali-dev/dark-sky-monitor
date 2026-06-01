interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 py-4 sm:py-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xs sm:text-sm uppercase tracking-wide font-bold">РыбаКлуб</div>
        <nav className="flex gap-4 sm:gap-8">
          <a
            href="#catalog"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs sm:text-sm py-2"
          >
            Каталог
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs sm:text-sm py-2"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}