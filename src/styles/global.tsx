'use client'

import { createGlobalStyle, css } from 'styled-components'

import { resetCss } from './reset-css'

export const GlobalStyles = createGlobalStyle`
  ${resetCss}

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  body,
  input,
  button {
    font-weight: normal;

    border: none;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none; 
    box-sizing: border-box;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html {
    font-size: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0;
    margin: 0;

    ::-webkit-scrollbar {
      display: none;
      background: transparent;  
    }
  }

  ${({ theme }) => css`
    ${theme.breakpoints.lg} {
      html {
        font-size: 40%;
      }
    }

    ${theme.breakpoints.md} {
      html {
        font-size: 35%;
      }
    }
  `}
`
