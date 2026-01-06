import "./globals.css";
import Providers from "./provider";

export const metadata = {
  title: "SomenTM | Smart Car Care",
  description: "24/7 Doorstep Car Services & Emergency Roadside Assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative overflow-hidden">
        <Providers>
          {/* Main app content ABOVE particles */}
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
