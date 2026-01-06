"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlowButton from "./components/GlowButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND WHITE LIGHT */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)]"
      />
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_75%)]"
      />

      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-2xl">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight
                       text-red-800
                       drop-shadow-[0_0_30px_rgba(255,60,60,0.35)]"
          >
            SomenTm
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 text-gray-400"
          >
            24/7 Doorstep Car Services & Roadside Assistance <span className="text-red-500">Sumatra</span>.
          </motion.p>

          {/* PRIMARY CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-12 flex justify-center gap-6"
          >
            <Link href="/book">
              <GlowButton label="BOOK SERVICE" />
            </Link>

            <Link href="/services">
              <GlowButton label="EXPLORE" />
            </Link>
          </motion.div>

          {/* SECONDARY LINK — ABOUT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="mt-8"
          >
            <Link
              href="/about"
              className="text-sm tracking-widest text-gray-500
                         hover:text-white transition"
            >
              ABOUT SOMENTM →
            </Link>
          </motion.div>

        </div>
      </section>

      {/* FOOTER MARKERS */}
      <div className="absolute left-6 bottom-6 text-xs tracking-widest text-gray-500">
        © SomenTm
      </div>
      <div className="absolute right-6 bottom-6 text-xs tracking-widest text-gray-500">
        INDIA
      </div>
    </main>
  );
}
