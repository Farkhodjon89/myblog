'use client'

import { type ChangeEvent, type FC, useEffect } from 'react'
import { CustomInput } from './Input'
import { Button, Chip, Stack } from '@mui/material'
import { usePostFormStore } from '@/store/RootStoreProvider'
import { observer } from 'mobx-react'
import s from './index.module.scss'

type Props = {
	data?: Post
}

export const PostForm: FC<Props> = observer(({ data }) => {
	const { post, update, setPostTitle, setPostBody, deletePostTag, addPostTag } =
		usePostFormStore()

	useEffect(() => {
		if (data) {
			update(data)
		}
	}, [data, update])

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPostTitle(e.target.value)
	}

	const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setPostBody(e.target.value)
	}

	const handleDeleteTag = (tag: string) => {
		deletePostTag(tag)
	}

	const handleAddTag = () => {
		const date = new Date().getTime()
		addPostTag(date.toString())
	}

	const handleSubmit = () => {
		const payload = {
			title: post.title,
			body: post.body,
			tags: String(post.tags).split(','),
		}
		if (isValid) {
			console.log(payload)
		}
	}

	const isValid =
		post.title && post.title.length > 0 && post.body && post.body.length > 0

	const chipsItems = post.tags.map((tag, n) => (
		<Chip key={n} label={tag} size="small" onDelete={() => handleDeleteTag(tag!)} />
	))

	return (
		<div className={s.wrapper}>
			<div className={s.wrapper__item}>
				<label htmlFor="post-title">Заголовок поста</label>
				<CustomInput
					id="post-title"
					value={post.title || ''} // Add a default value or empty string
					onChange={handleTitleChange}
				/>
			</div>
			<div className={s.wrapper__item}>
				<label htmlFor="post-body">Содержание поста</label>
				<CustomInput
					id="post-body"
					multiline
					placeholder="Содержание поста"
					onChange={handleBodyChange}
					value={post.body || ''} // Add a default value or empty string
					rows={5}
				/>
			</div>
			<div className={s.wrapper__item}>
				<Stack direction="row" spacing={1}>
					{chipsItems}
					<Chip key={'add-tag-chip'} label="+" size="small" onClick={handleAddTag} />
				</Stack>
			</div>
			<div className={s.wrapper__item}>
				<Button disabled={!isValid} onClick={handleSubmit}>
					Опубликовать
				</Button>
			</div>
		</div>
	)
})

PostForm.displayName = 'PostForm'
