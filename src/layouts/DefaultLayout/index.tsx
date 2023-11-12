'use client'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@/styles/global'

import theme from '@/styles/theme'

import * as S from './styles'
import { Header } from '@/app/components/Header'

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <S.ContainerDefaultLayout>
        <Header />

        <S.ContainerMain>{children}</S.ContainerMain>
      </S.ContainerDefaultLayout>
    </ThemeProvider>
  )
}
