import { type FC, memo } from 'react'
import { Chip, Stack } from '@mui/material'

type Props = {
	tags: string[]
}

export const PostTags: FC<Props> = memo(({ tags }) => {
	const tagsItems = tags.map((tag, n) => <Chip key={n} size="small" label={tag} />)

	if (!tags) return null

	return (
		<Stack direction="row" spacing={1} marginTop={2}>
			{tagsItems}
		</Stack>
	)
})

PostTags.displayName = 'PostTags'
