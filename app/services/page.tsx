"use client";
export const metadata = {
  title: "Car Services | SomenTm Doorstep Auto Care",
  description:
    "Professional doorstep car services by SomenTm including diagnostics, repairs, maintenance, and on-road assistance.",
};


import { motion } from "framer-motion";
import Link from "next/link";
import GlowButton from "../components/GlowButton";

const services = [
  {
    title: "Engine Related",
    items: [
      "Alternator Replacement",
      "Alternator Repair",
      "Engine Oil Change",
      "Radiator Coolant Top-up / Flush",
    ],
  },
  {
    title: "Tyre & Brake",
    items: [
      "Flat Tyre Repair (Tubeless)",
      "Flat Tyre Repair (Tube)",
      "Brake Fluid Change",
      "Brake Pad Replacement",
      "Suspension Minor Fix",
    ],
  },
  {
    title: "Vehicle Cleaning",
    items: [
      "Exterior Foam Wash (Bike)",
      "Exterior Foam Wash (Car)",
      "Interior Vacuum & Wipe",
    ],
  },
  {
    title: "Electrical Problems",
    items: [
      "Fuse Replacement",
      "Wiring & Minor Fixes",
      "Battery Replacement",
      "Battery Jumpstart",
      "Headlight Bulb Replacement",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-red-500
                     drop-shadow-[0_0_30px_rgba(255,60,60,0.35)]"
        >
          Our Services
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Doorstep assistance covering <span className="text-white font-medium">
          {services.reduce((acc, s) => acc + s.items.length, 0)}+</span> essential
          vehicle services — delivered by trained professionals.
        </p>
      </section>

      {/* SERVICE GROUPS */}
      <section className="max-w-5xl mx-auto grid gap-12">
        {services.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-red-400">
              {group.title}
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <div className="mt-24 flex justify-center">
        <Link href="/book">
          <GlowButton label="BOOK A SERVICE" />
        </Link>
      </div>

      {/* FOOTER */}
      <div className="mt-24 text-center text-xs tracking-widest text-gray-500">
        SOMENTM • DOORSTEP VEHICLE ASSISTANCE • INDIA
      </div>
    </main>
  );
}
