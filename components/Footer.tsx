import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import FadeIn from "@/components/ui/FadeIn";

const socialLinks = [
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
];

const policyLinks = [
  { label: "Privacy Policies", href: "#" },
  { label: "Terms of use", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-darker pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="text-2xl font-extrabold text-white">Declut</p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary-darker transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darker"
                >
                  <social.icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-bold text-white">Address</p>
            <p className="mt-4 text-white/70">
              5 Ogunsiji close, Allen, Ikeja, Lagos state.
            </p>
          </div>

          <div>
            <p className="font-bold text-white">Call Us</p>
            <div className="mt-4 flex flex-col gap-1">
              <a
                href="tel:+2349160006032"
                className="text-white/70 transition-colors hover:text-white"
              >
                +234 916 000 6032
              </a>
              <a
                href="mailto:Declut@vereinight.com"
                className="text-white/70 transition-colors hover:text-white"
              >
                Declut@vereinight.com
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold text-white">Our Policies</p>
            <div className="mt-4 flex flex-col gap-1">
              {policyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
