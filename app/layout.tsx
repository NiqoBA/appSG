import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SouthGenetics - CDSS Oncológico',
  description: 'Sistema de apoyo a decisiones clínicas para pruebas oncológicas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

