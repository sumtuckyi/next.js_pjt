import '@/app/ui/global.css';
import { ar_one_sans, inter, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ar_one_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
