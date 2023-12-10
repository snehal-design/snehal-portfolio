interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <div className="z-10 mx-auto w-full xl:px-0 mb-20">
      <h1
        className="animate-fade-up bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        {title}
      </h1>
    </div>
  );
}
