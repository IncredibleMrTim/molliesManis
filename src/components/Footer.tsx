import { footerLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 text-center">
      <div className="mb-2 font-display text-2xl text-primary">Mollies Manis</div>
      <p className="mb-4 text-sm font-semibold text-muted-foreground">
        Hand-painted nail art · Crafted with love 💅
      </p>
      <div className="flex justify-center gap-3 text-sm font-bold text-body">
        {footerLinks.map((link, index) => (
          <span key={link.href} className="flex items-center gap-3">
            {index > 0 && <span className="text-border">·</span>}
            <a href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          </span>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">© 2026 Mollies Manis. All rights reserved.</p>
    </footer>
  );
}
