"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlowButton from "../components/GlowButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      {/* BACKGROUND ATMOSPHERE */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"
      />

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-red-700
                     drop-shadow-[0_0_30px_rgba(255,60,60,0.35)]"
        >
          About SomenTm
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Built for real roads, real problems, and real urgency.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto grid gap-12">

        <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
          <h2 className="text-2xl font-semibold mb-4">Why We Exist</h2>
          <p className="text-gray-300 leading-relaxed">
            Vehicle breakdowns are unpredictable, stressful, and often unsafe.
            SomenTM exists to ensure that no driver is left helpless on the road —
            by delivering fast, professional, doorstep assistance anytime, anywhere.
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-gray-300 leading-relaxed">
            We operate a 24/7 vehicle assistance system that combines skilled
            mechanics, operational intelligence, and a future-ready safety
            platform powered by our Sumatra technology.
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To become India’s most reliable vehicle safety and assistance network —
            where help is always one request away.
          </p>
        </div>

      </section>

      {/* CTA SECTION — WIRED */}
      <div className="mt-24 flex flex-col sm:flex-row justify-center gap-6">

        <Link href="/services">
          <GlowButton label="EXPLORE SERVICES" />
        </Link>

        <Link href="/book">
          <GlowButton label="REQUEST ASSISTANCE" />
        </Link>

      </div>

      {/* FOOTER */}
      <div className="mt-24 text-center text-xs tracking-widest text-gray-500">
        SOMENTM • BUILT FOR REAL ROADS • INDIA
      </div>
    </main>
  );
}
