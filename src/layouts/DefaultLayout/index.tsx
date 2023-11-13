'use client'

import { GlobalStyles } from '@/styles/global'

import * as S from './styles'
import { Header } from '@/components/Header'
import { queryClient } from '@/utils/queryClient'
import { QueryClientProvider } from 'react-query'
import { CartProvider } from '@/context/CartContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import { MenuRight } from '@/components/MenuRight'
import { Footer } from '@/components/Footer'
import {  useTheme } from '@/context/ThemeContext'
import { darkTheme, theme } from '@/styles/theme'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
export function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { theme: currentTheme } = useTheme()
  console.log('kk', currentTheme, currentTheme === 'light' )
  return (

      <StyledThemeProvider theme={currentTheme === 'light' ? theme : darkTheme}>
        {' '}
        <GlobalStyles />
        <ToastContainer position="top-right" newestOnTop />
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <S.ContainerDefaultLayout>
              <Header />
              <MenuRight />

              <S.ContainerMain>{children}</S.ContainerMain>
              <Footer />
            </S.ContainerDefaultLayout>
          </CartProvider>
        </QueryClientProvider>
      </StyledThemeProvider>

  )
}
