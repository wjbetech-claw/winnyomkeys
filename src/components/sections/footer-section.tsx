type FooterSectionProps = {
  brandName: string;
  description: string;
};

export function FooterSection({ brandName, description }: FooterSectionProps) {
  return (
    <footer className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 px-1 text-center text-[0.95rem] text-(--muted) md:justify-between md:text-left">
      <p className="m-0">{brandName}</p>
      <p className="ko-copy m-0">{description}</p>
    </footer>
  );
}
