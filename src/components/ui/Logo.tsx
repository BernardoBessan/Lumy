type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: {
    container: "h-8 w-8 rounded-xl",
    text: "text-sm",
  },
  md: {
    container: "h-10 w-10 rounded-2xl",
    text: "text-lg",
  },
  lg: {
    container: "h-20 w-20 rounded-[28px]",
    text: "text-3xl",
  },
};

export function Logo({ size = "md" }: LogoProps) {
  const styles = sizes[size];

  return (
    <div
      className={`flex items-center justify-center bg-[#DCEFE9] ${styles.container}`}
      aria-label="Lumy"
    >
      <span className={`font-semibold text-[#2F7D6D] ${styles.text}`}>
        L
      </span>
    </div>
  );
}