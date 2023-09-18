'use client'

import { type FC, useCallback } from 'react'
import { observer } from 'mobx-react'
import { usePostFormStore } from '@/store/RootStoreProvider'
import Button from '@mui/material/Button'

export const SubmitFormItem: FC = observer(() => {
	const { post } = usePostFormStore()

	const isValid =
		post.title &&
		post.title.length > 0 &&
		post.body &&
		post.body.length > 0 &&
		post.tags.length > 0

	const handleSubmit = useCallback(() => {
		const payload = {
			title: post.title,
			body: post.body,
			tags: String(post.tags).split(','),
		}
		if (isValid) {
			// Отправляем запрос отсюда
			console.log(payload)
		}
	}, [isValid, post.body, post.tags, post.title])

	return (
		<>
			<Button disabled={!isValid} onClick={handleSubmit}>
				Опубликовать
			</Button>
		</>
	)
})
SubmitFormItem.displayName = 'SubmitFormItem'
