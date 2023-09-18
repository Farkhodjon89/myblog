'use client'
import { type FC, memo } from 'react'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import BlurOnRounded from '@mui/icons-material/BlurOnRounded'
import HourglassEmptyRounded from '@mui/icons-material/HourglassEmptyRounded'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

const ProfileBar = dynamic(() => import('@/components/layout/profileBar'), {
	ssr: false,
	loading: () => (
		<Avatar sx={{ width: 32, height: 32 }}>
			<HourglassEmptyRounded />
		</Avatar>
	),
})

export const LayoutTopBar: FC = memo(() => {
	return (
		<AppBar
			position="fixed"
			sx={{ zIndex: 2000, backgroundColor: 'background.paper' }}
		>
			<Container maxWidth="md" sx={{ backgroundColor: 'background.paper' }}>
				<Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
					<Link href="/" aria-label="Homepage">
						<BlurOnRounded sx={{ color: '#000', width: 32, height: 32 }} />
					</Link>

					<Box sx={{ flexGrow: 0 }}>
						<ProfileBar />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
})

LayoutTopBar.displayName = 'LayoutTopBar'
