import { Link } from "react-router-dom";
import AppLogo from "@/components/branding/AppLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <AppLogo className="h-8 w-8" />
            <span className="font-display font-bold text-foreground">Retirely</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">Terms</Link>
            <Link to="/support" className="transition-colors hover:text-foreground">Support</Link>
          </div>

          <p className="max-w-sm text-center text-xs text-muted-foreground md:text-right">
            © {new Date().getFullYear()} Retirely by HawkEye Data Solutions Inc. A calmer way to plan your future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
