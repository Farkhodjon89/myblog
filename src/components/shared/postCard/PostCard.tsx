import { type FC, memo } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import PostAuthorBar from '@/components/shared/postAuthorBar'
import s from './index.module.scss'

import { Paper, Typography } from '@mui/material'

const PostMenu = dynamic(() => import('@/components/shared/postMenu'), { ssr: false })
const PostTags = dynamic(() => import('@/components/shared/postTags'))

type Props = {
	post: Post
}

export const PostCard: FC<Props> = memo(({ post }) => {
	const imageText = encodeURIComponent(post.title)
	const imageSrc = `https://image.dummyjson.com/800x400/efefef/222222?text=${imageText}&fontSize=16`

	return (
		<Paper elevation={0} className={s.postcard}>
			<div>
				<div className={s.postcard__head}>
					<PostAuthorBar userId={post.userId} />
					<PostMenu authorId={post.userId} postId={post.id} />
				</div>
				<Link href={`/post/${post.id}`}>
					<Image
						className={s.postcard__image}
						priority
						src={imageSrc}
						alt={post.title}
						width={800}
						height={400}
					/>
				</Link>
				<Link href={`/post/${post.id}`}>
					<Typography variant="h4">{post.title}</Typography>
				</Link>
				<PostTags tags={post.tags} />
			</div>
		</Paper>
	)
})

PostCard.displayName = 'PostCard'
