import dynamic from 'next/dynamic'
import PostAuthorBar from '@/components/shared/postAuthorBar'
import { Favorite } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import Image from 'next/image'
import s from './index.module.scss'

const PostTags = dynamic(() => import('@/components/shared/postTags'))

async function getData(id: number) {
	const res = await fetch(`${process.env.API_URL}/posts/${id}`)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

export async function PostSummary(props: { id: number }) {
	const post: Post = await getData(props.id)

	const imageText = encodeURIComponent(post.title)
	const imageSrc = `https://image.dummyjson.com/800x400/efefef/222222?text=${imageText}&fontSize=16`

	return (
		<>
			<PostAuthorBar userId={post.userId} />
			<Typography variant="h4" component="h1">
				{post.title}
			</Typography>
			<PostTags tags={post.tags} />
			<Image
				className={s.post_image}
				priority
				src={imageSrc}
				alt={post.title}
				width={800}
				height={400}
			/>
			<Typography marginY={3} variant="body1">
				{post.body}
			</Typography>
			{post.reactions ? (
				<Badge badgeContent={post.reactions} color="default">
					<Favorite fontSize="large" sx={{ color: red[500] }} />
				</Badge>
			) : (
				<></>
			)}
		</>
	)
}
