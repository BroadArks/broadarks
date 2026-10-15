export default function Logo({ className = "", light = false, size = "md" }) {
  const mark = size === "lg" ? "h-12 sm:h-14" : "h-9 sm:h-11";
  const type = size === "lg" ? "h-10 sm:h-12" : "h-[1.875rem] sm:h-9";
  return (
    <span className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <img
        src="/logo-mark.webp"
        alt=""
        aria-hidden
        className={`${mark} w-auto shrink-0`}
      />
      <img
        src="/logo-type.webp"
        alt="BroadArks"
        className={`${type} w-auto shrink-0 ${light ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
