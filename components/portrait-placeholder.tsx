import Image from "next/image";

type PortraitPlaceholderProps = {
  compact?: boolean;
  photoSrc?: string;
  alt?: string;
};

export function PortraitPlaceholder({ compact = false, photoSrc, alt }: PortraitPlaceholderProps) {
  const heightClass = compact ? "min-h-[28rem]" : "min-h-[34rem] lg:min-h-[44rem]";
  const resolvedPhotoSrc = photoSrc ?? (compact ? "/ron-jordan-point-of-view.png" : undefined);

  if (resolvedPhotoSrc) {
    return (
      <div className={`relative overflow-hidden bg-navy ${heightClass}`}>
        <Image
          src={resolvedPhotoSrc}
          alt={alt ?? (compact ? "Ronald L. Jordan Jr. seated in an executive office" : "Ronald L. Jordan Jr.")}
          fill
          priority
          sizes="(min-width: 1024px) 43vw, 100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_65%,rgba(13,32,52,.3))]"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className={`portrait-shell relative overflow-hidden bg-navy text-ivory ${heightClass}`} role="img" aria-label="Editorial monogram artwork placeholder for an approved portrait of Ron Jordan">
      <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
      <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-[linear-gradient(180deg,transparent,rgba(13,32,52,.95))]" aria-hidden="true" />
      <div className="absolute left-8 top-8 text-[0.67rem] font-bold uppercase tracking-[0.25em] text-ivory/60">Clarity / Alignment / Momentum</div>
      <div className="absolute bottom-10 left-8 right-8 flex items-end justify-between border-t border-ivory/25 pt-7">
        <div>
          <p className="font-serif text-5xl sm:text-6xl">RJ</p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-ivory/60">Approved portrait to follow</p>
        </div>
        <div className="mb-2 size-3 rounded-full bg-gold" aria-hidden="true" />
      </div>
    </div>
  );
}
