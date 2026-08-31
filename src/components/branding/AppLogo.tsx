import { cn } from "@/lib/utils";

import appLogo from "@/assets/screenshots/IMG_6067.png";

type AppLogoProps = {
  className?: string;
};

const AppLogo = ({ className }: AppLogoProps) => {
  return (
    <img
      src={appLogo}
      alt="Retirely logo"
      className={cn("block rounded-xl object-cover shadow-[0_0_28px_rgba(14,165,233,0.25)]", className)}
    />
  );
};

export default AppLogo;
