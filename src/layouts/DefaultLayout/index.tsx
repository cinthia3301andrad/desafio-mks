'use client'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@/styles/global'

import theme from '@/styles/theme'

import * as S from './styles'
import { Header } from '@/components/Header'
import { queryClient } from '@/utils/queryClient'
import { QueryClientProvider } from 'react-query'
import { CartProvider } from '@/context/CartContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" newestOnTop />

      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <GlobalStyles />
          <S.ContainerDefaultLayout>
            <Header />

            <S.ContainerMain>{children}</S.ContainerMain>
          </S.ContainerDefaultLayout>
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
