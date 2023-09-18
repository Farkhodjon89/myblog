'use client'

import { type FC, type ChangeEvent, useCallback } from 'react'
import { observer } from 'mobx-react'
import { usePostFormStore } from '@/store/RootStoreProvider'
import CustomInput from '@/components/shared/ui/input'

export const BodyFormItem: FC = observer(() => {
	const { setPostBody, post } = usePostFormStore()

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setPostBody(e.target.value)
		},
		[setPostBody]
	)

	return (
		<>
			<label htmlFor="post-body">Содержание поста</label>
			<CustomInput
				id="post-body"
				multiline
				placeholder="Содержание поста"
				onChange={handleChange}
				value={post.body || ''} // Add a default value or empty string
				rows={5}
			/>
		</>
	)
})
BodyFormItem.displayName = 'BodyFormItem'
