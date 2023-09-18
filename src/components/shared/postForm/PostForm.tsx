'use client'

import { type FC, useEffect, memo } from 'react'

import { usePostFormStore } from '@/store/RootStoreProvider'
// import { observer } from 'mobx-react'
import s from './index.module.scss'
import { TitleFormItem } from './TitleFormItem'
import { BodyFormItem } from './BodyFormItem'
import { ChipsFormItem } from './ChipsFormItem'
import { SubmitFormItem } from './SubmitFormItem'

type Props = {
	data?: Post
}

export const PostForm: FC<Props> = memo(({ data }) => {
	const { update, resetForm } = usePostFormStore()

	useEffect(() => {
		if (data) update(data)
		return () => resetForm()
	}, [data, resetForm, update])

	return (
		<div className={s.wrapper}>
			<div className={s.wrapper__item}>
				<TitleFormItem />
			</div>
			<div className={s.wrapper__item}>
				<BodyFormItem />
			</div>
			<div className={s.wrapper__item}>
				<ChipsFormItem />
			</div>
			<div className={s.wrapper__item}>
				<SubmitFormItem />
			</div>
		</div>
	)
})

PostForm.displayName = 'PostForm'
