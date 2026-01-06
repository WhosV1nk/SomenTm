"use client";

import { usePathname } from "next/navigation";
import ParticlesBackground from "./components/particles";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const blurred = pathname !== "/";

  return (
    <>
      <ParticlesBackground blurred={blurred} />
      {children}
    </>
  );
}
