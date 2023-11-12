import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'


import { DefaultLayout } from '@/layouts/DefaultLayout'
import StyledComponentsRegistry from '@/lib/registry_styled_components'
import { Header } from './components/Header'


const montserrat = Montserrat({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description:
    'Loja de vendas'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={montserrat.className}
    >
      <body>
        <StyledComponentsRegistry>
       
       
            <DefaultLayout>{children}</DefaultLayout>
        
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
