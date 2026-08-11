import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yalı Emlak Network',
  description: 'Yalı Emlak Network - Gizlilik, KVKK, İptal & İade ve Kullanım Koşulları',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
