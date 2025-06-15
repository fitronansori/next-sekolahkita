import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

import Link from "next/link";

import Logo from "@/components/common/Logo";

import {
  footer_academic_links,
  footer_contact_info,
  footer_information_links,
  footer_legal_links,
  footer_quick_links,
  footer_social_media,
  school_info,
} from "@/constants/data";

const Footer = () => {
  const current_year = new Date().getFullYear();

  // Icon mapping for contact info
  const contact_icon_map = {
    address: MapPin,
    phone: Phone,
    email: Mail,
    hours: Clock,
  };

  // Icon mapping for social media
  const social_icon_map = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Information */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-sm leading-relaxed text-white">
              {school_info.description}
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {footer_social_media.map((social, index) => {
                const IconComponent =
                  social_icon_map[
                    social.platform as keyof typeof social_icon_map
                  ];
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-2 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tentang Sekolah</h3>
            <ul className="space-y-2">
              {footer_quick_links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Program Akademik</h3>
            <ul className="space-y-2">
              {footer_academic_links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informasi & Kontak</h3>

            {/* Information Links */}
            <ul className="mb-4 space-y-2">
              {footer_information_links.slice(0, 2).map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              {footer_contact_info.map((info, index) => {
                const IconComponent =
                  contact_icon_map[info.type as keyof typeof contact_icon_map];
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span className="text-sm text-white">{info.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-primary-foreground/20 border-t">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-white">
              © {current_year} {school_info.name}. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6">
              {footer_legal_links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
