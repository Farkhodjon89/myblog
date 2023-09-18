'use client'

import { type FC, type ChangeEvent, useCallback } from 'react'
import { observer } from 'mobx-react'
import { usePostFormStore } from '@/store/RootStoreProvider'
import CustomInput from '@/components/shared/ui/input'

export const TitleFormItem: FC = observer(() => {
	const { setPostTitle, post } = usePostFormStore()

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setPostTitle(e.target.value)
		},
		[setPostTitle]
	)

	return (
		<>
			<label htmlFor="post-title">Заголовок поста</label>
			<CustomInput
				id="post-title"
				value={post.title || ''} // Add a default value or empty string
				onChange={handleChange}
			/>
		</>
	)
})
TitleFormItem.displayName = 'TitleFormItem'
