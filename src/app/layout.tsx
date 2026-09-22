import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'House Floor Plan - 60ft × 28ft | 5 Rooms',
  description: 'House floor plan design with 5 rooms, attached bathrooms, common toilet and wash room',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
