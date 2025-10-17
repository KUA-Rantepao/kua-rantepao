// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUA Preview",
  description: "Website Uji Coba Layanan KUA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
