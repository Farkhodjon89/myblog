'use client'

import { type MouseEvent, useState } from 'react'
import { useUserStore } from '@/store/RootStoreProvider'
import { observer } from 'mobx-react'
import { useRouter } from 'next/navigation'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Delete from '@mui/icons-material/Delete'

import s from './index.module.scss'

export const PostMenu = observer(function PostMenu(props: {
	authorId: number
	postId: number
}) {
	const { id } = useUserStore()
	const router = useRouter()

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleOpenEditPage = () => {
		handleClose()
		router.push(`/post/${props.postId}/edit`)
	}

	if (!id || id !== props.authorId) return null

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? 'post-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Действия
			</Button>
			<Menu
				id="post-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleOpenEditPage} disableRipple>
					<EditIcon className={s.menu_icon} />
					<span className={s.menu_item}>Редактировать</span>
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<Delete className={s.menu_icon} />
					<span className={s.menu_item}>Удалить</span>
				</MenuItem>
			</Menu>
		</div>
	)
})
