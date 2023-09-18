'use client'
import type { ReactNode } from 'react'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import theme from './theme'

import { ThemeProvider, CssBaseline } from '@mui/material'

export function AppThemeProvider({ children }: { children: ReactNode }) {
	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	)
}
