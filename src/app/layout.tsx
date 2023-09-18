import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { RootStoreProvider } from '@/store/RootStoreProvider'
import AppThemeProvider from '@/components/layout/themeProvider'

import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

const LayoutTopBar = dynamic(() => import('@/components/layout/layoutTopBar'), {
	ssr: false,
	loading: () => (
		<Skeleton
			style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999 }}
			variant="rectangular"
			height={66}
		/>
	),
})

export const metadata: Metadata = {
	title: 'My Dummmy Blog',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ru">
			<body>
				<RootStoreProvider>
					<AppThemeProvider>
						<LayoutTopBar />
						<Box
							component="main"
							sx={{
								flexGrow: 1,
								bgcolor: 'background.default',
								mt: ['48px', '56px', '64px'],
								p: 3,
								minHeight: '100vh',
							}}
						>
							{children}
						</Box>
					</AppThemeProvider>
				</RootStoreProvider>
			</body>
		</html>
	)
}
