import { cn } from "@/lib/utils";

type AppLogoProps = {
  className?: string;
};

const AppLogo = ({ className }: AppLogoProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl shadow-[0_0_28px_rgba(14,165,233,0.25)]",
        className,
      )}
    >
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300 via-emerald-300 to-sky-400 text-xl font-black tracking-tight text-slate-900">
        R
      </div>
    </div>
  );
};

export default AppLogo;
