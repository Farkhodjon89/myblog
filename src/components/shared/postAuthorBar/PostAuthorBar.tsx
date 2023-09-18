import { type FC, memo } from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import s from './index.module.scss'

type Props = {
	userId: number
}

async function getData(id: number) {
	const res = await fetch(`${process.env.API_URL}/users/${id}`)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

export const PostAuthorBar: FC<Props> = memo(async ({ userId }) => {
	const user: User = await getData(userId)

	return (
		<div className={s.user}>
			<Avatar src={user.image} alt={user.username} />
			<div className={s.user__info}>
				<Typography>{user.firstName}</Typography>
				<Typography>{user.lastName}</Typography>
			</div>
		</div>
	)
})

PostAuthorBar.displayName = 'PostAuthorBar'
