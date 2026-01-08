"use client";
export const metadata = {
  title: "Book Car Assistance | SomenTm Emergency & Normal Service",
  description:
    "Book emergency roadside assistance or scheduled car services instantly with SomenTm. Available 24/7.",
};


import { useState } from "react";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import { createBooking } from "../actions/createbooking";

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [mode, setMode] = useState<"normal" | "emergency" | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [issue, setIssue] = useState("");

  /* ================= SUCCESS ================= */
  if (submitted) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl rounded-2xl bg-neutral-900 border border-neutral-800 p-10 text-center"
        >
          <div className="text-5xl mb-6">✅</div>
          <h2 className="text-2xl font-semibold mb-4">
            Request Confirmed
          </h2>
          <p className="text-gray-400">
            {mode === "emergency"
              ? "Help is being dispatched immediately."
              : "A mechanic will contact you shortly."}
          </p>
          <div className="mt-8 text-xs tracking-widest text-gray-500">
            SOMENTM • 24/7 ASSISTANCE • INDIA
          </div>
        </motion.div>
      </main>
    );
  }

  /* ================= MAIN FLOW ================= */
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl rounded-2xl bg-neutral-900 border border-neutral-800 p-8"
      >
        <div className="mb-6">
          <div className="text-sm text-gray-400 mb-2">
            Step {step} of 4
          </div>
          <h1 className="text-2xl font-semibold">
            Request Assistance
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Guided booking • Fast response • 24/7 support
          </p>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-lg font-semibold mb-6">
              What type of assistance do you need?
            </h2>
            <div className="space-y-4">
              <GlowButton
                label="NORMAL SERVICE"
                onClick={() => {
                  setMode("normal");
                  setStep(2);
                }}
              />
              <GlowButton
                label="EMERGENCY"
                onClick={() => {
                  setMode("emergency");
                  setStep(2);
                }}
              />
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-lg font-semibold mb-6">
              Your Details
            </h2>
            <div className="space-y-4">
              <input
                className="w-full rounded-lg bg-black border border-neutral-800 px-4 py-3"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full rounded-lg bg-black border border-neutral-800 px-4 py-3"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              {/* CITY DROPDOWN – MATCHES DB */}
              <select
                className="w-full rounded-lg bg-black border border-neutral-800 px-4 py-3"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Noida">Noida</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Jaipur">Jaipur</option>
              </select>

              <GlowButton
                label="NEXT"
                onClick={() => {
                  if (!name || !phone || !city) return;
                  setStep(3);
                }}
              />
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="text-lg font-semibold mb-6">
              Vehicle & Issue
            </h2>
            <div className="space-y-4">
              <input
                className="w-full rounded-lg bg-black border border-neutral-800 px-4 py-3"
                placeholder="Vehicle model"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              />
              <textarea
                className="w-full rounded-lg bg-black border border-neutral-800 px-4 py-3 h-28"
                placeholder="Describe the issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
              />
              <GlowButton
                label="NEXT"
                onClick={() => {
                  if (!vehicle) return;
                  setStep(4);
                }}
              />
            </div>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h2 className="text-lg font-semibold mb-6">
              Confirm Request
            </h2>

            <div className="text-sm text-gray-400 space-y-2 mb-8">
              <div>Name: <span className="text-white">{name}</span></div>
              <div>Phone: <span className="text-white">{phone}</span></div>
              <div>City: <span className="text-white">{city}</span></div>
              <div>Vehicle: <span className="text-white">{vehicle}</span></div>
              <div>Mode: <span className="text-white">{mode}</span></div>
            </div>

            <GlowButton
              label={
                mode === "emergency"
                  ? "CONFIRM EMERGENCY"
                  : "CONFIRM BOOKING"
              }
              onClick={async () => {
                if (!mode) return;

                await createBooking({
                  mode,
                  name,
                  phone,
                  city,
                  vehicle,
                  issue,
                });

                setSubmitted(true);
              }}
            />
          </>
        )}
      </motion.div>
    </main>
  );
}
