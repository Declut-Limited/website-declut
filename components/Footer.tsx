import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Icon from "@/components/ui/Icon";
import FadeIn from "@/components/ui/FadeIn";

const socialLinks = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/declutapp?igsi=MWhnN3U3M3Y0dnA0eQ==",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/share/1FaBrep8c9/?mibextid=wwXIfr",
  },
  {
    icon: FaXTwitter,
    label: "Twitter / X",
    href: "https://x.com/Declut_",
  },
];

const contactDetails = [
  {
    icon: "call" as const,
    value: "+234 916 000 6032",
    href: "tel:+2349160006032",
  },
  {
    icon: "sms" as const,
    value: "Mydeclutapp@gmail.com",
    href: "mailto:mydeclutapp@gmail.com",
  },
  {
    icon: "location" as const,
    value: "5 Ogunsiji close, Allen, Ikeja, Lagos state.",
    href: undefined,
  },
];

const policyLinks = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0C] py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <Image
                src="/svg/logo.svg"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-extrabold text-white">Declut</span>
            </div>
            <p className="mt-5 text-sm text-white/60">
              Declutter with ease. List your unwanted items, connect with
              interested buyers, and turn clutter into value. Our simple
              platform makes selling effortless, helping you clear your space
              and make room for what matters.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C]"
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-bold text-white">Reach us</p>
            <div className="mt-5 flex flex-col gap-3">
              {contactDetails.map((detail) => (
                <div key={detail.value} className="flex items-start gap-2.5">
                  <Icon
                    name={detail.icon}
                    variant="bold"
                    size={18}
                    color="#2563eb"
                    className="mt-0.5 shrink-0"
                  />
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="max-w-56 text-sm text-white/70">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Declut Limited. All rights reserved
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              {policyLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">|</span>}
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
