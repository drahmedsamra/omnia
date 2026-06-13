import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-red-900/20 bg-black py-32"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <h3 className="text-3xl font-black text-white">
            أمنية أحمد سمرة
          </h3>

          <p className="mt-3 text-gray-400">
            لاعبة منتخب مصر للتنس والنادي الأهلي
          </p>

          {/* Logos */}
          <div className="mt-8 flex items-center gap-6">

            <div className="flex items-center gap-2 rounded-full border border-red-900/20 bg-white/[0.03] px-4 py-2">
              <span className="text-xl">🇪🇬</span>
              <span className="text-sm text-gray-300">
                منتخب مصر
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-red-900/20 bg-white/[0.03] px-4 py-2">
            <Image
  src="/images/logos/ahly-logo.webp"
  alt="النادي الأهلي"
  width={24}
  height={24}
  className="h-auto w-auto"
/>
              <span className="text-sm text-gray-300">
                النادي الأهلي
              </span>
            </div>

          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-full border border-red-500/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-600 hover:border-red-600"
          >
            Instagram
          </a>

          {/* Copyright */}
          <div className="mt-10 border-t border-red-900/20 pt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Omnia Ahmed Samra. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}