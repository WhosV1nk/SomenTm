import "./globals.css";

export const metadata = {
  title: "SomenTm | Smart Car Care",
  description: "24/7 Doorstep Car Services & Emergency Roadside Assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen overflow-y-auto">
        {children}
      </body>
    </html>
  );
}
