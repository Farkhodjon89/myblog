'use client'
import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/store/RootStoreProvider'
import { deepOrange } from '@mui/material/colors'

import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'

export const ProfileBar = observer(function ProfileBar() {
	const { username, reset, update } = useUserStore()
	const [auth, setAuth] = useState(false)

	useEffect(() => {
		if (auth) {
			update({
				id: 9,
				firstName: 'Ivan',
				lastName: 'Sequend',
				username: 'IL',
				image: '',
			})
		} else {
			reset()
		}
		return () => reset()
	}, [auth, reset, update])

	const handleClick = () => {
		setAuth(auth => !auth)
	}

	return (
		<>
			<Tooltip title={auth ? 'Profile page' : 'Sign In'}>
				<IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
					{auth ? (
						<Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>
							{username}
						</Avatar>
					) : (
						<Avatar sx={{ width: 32, height: 32 }} />
					)}
				</IconButton>
			</Tooltip>
		</>
	)
})

ProfileBar.displayName = 'ProfileBar'
