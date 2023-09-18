'use client'

import { type FC, useCallback } from 'react'
import { observer } from 'mobx-react'
import { usePostFormStore } from '@/store/RootStoreProvider'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

export const ChipsFormItem: FC = observer(() => {
	const { addPostTag, deletePostTag, post } = usePostFormStore()

	const canAddMore = post.tags.length < 6

	const handleAddTag = useCallback(() => {
		if (canAddMore) {
			const dateTime = new Date().getTime()
			addPostTag(dateTime.toString())
		}
	}, [addPostTag, canAddMore])

	const handleDeleteTag = useCallback(
		(tag: string) => {
			deletePostTag(tag)
		},
		[deletePostTag]
	)

	const chipsItems = post.tags.map((tag, n) => (
		<Chip key={n} label={tag} size="small" onDelete={() => handleDeleteTag(tag!)} />
	))

	return (
		<>
			<Stack direction="row" spacing={1}>
				{chipsItems}
				<Chip
					key={'add-tag-chip'}
					label="+"
					size="small"
					onClick={handleAddTag}
					disabled={!canAddMore}
				/>
			</Stack>
		</>
	)
})
ChipsFormItem.displayName = 'ChipsFormItem'
