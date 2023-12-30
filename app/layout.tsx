import type { Metadata } from 'next'
import { ThemeProvider} from '~components'


export const metadata: Metadata = {
  title: 'Moriapp',
  description: '|||||',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <ThemeProvider >
        {children}
      </ThemeProvider>
    </html>
  )
}
